<?php
// Test MongoDB Connection
require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$uri = $_ENV['DB_URI'];
$database = $_ENV['DB_DATABASE'];

echo "Testing MongoDB connection...\n";
echo "Connection URI: " . preg_replace('/\/\/([^:]+):([^@]+)@/', '//***:***@', $uri) . "\n";
echo "Database: $database\n\n";

try {
    $client = new MongoDB\Client($uri, [], [
        'serverSelectionTimeoutMS' => 5000,
    ]);
    
    // Attempt to connect
    $databases = $client->listDatabases();
    
    echo "✓ Connection successful!\n";
    echo "Available databases:\n";
    foreach ($databases as $db) {
        echo "  - " . $db->getName() . "\n";
    }
} catch (MongoDB\Driver\Exception\ConnectionTimeoutException $e) {
    echo "✗ Connection failed: Connection timeout\n";
    echo "Possible causes:\n";
    echo "  1. Your IP address is not whitelisted in MongoDB Atlas\n";
    echo "  2. Firewall is blocking the connection\n";
    echo "  3. Incorrect connection string\n";
    echo "\nError details: " . $e->getMessage() . "\n";
} catch (Exception $e) {
    echo "✗ Connection failed: " . $e->getMessage() . "\n";
}
