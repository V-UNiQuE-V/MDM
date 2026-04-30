<?php
session_start();

// DB Connection
$conn = new mysqli("localhost", "root", "", "user_auth");

// Register
if (isset($_POST['register'])) {
    $username = $_POST['username']; 
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $conn->query("INSERT INTO users (username, email, password) 
                  VALUES ('$username', '$email', '$password')");
    $msg = "Registration Successful!";
}

// Login
if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $result = $conn->query("SELECT * FROM users WHERE email='$email'");
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();

        if (password_verify($password, $user['password'])) {
            $_SESSION['user'] = $user['username'];
        } else {
            $msg = "Invalid Password";
        }
    } else {
        $msg = "User not found";
    }
}

// Logout
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: index.php");
    exit;
}
?>

<!DOCTYPE html>
<html>
<head>
<title>Login System</title>

<!-- Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

</head>
<body class="bg-light">

<div class="container mt-5">

<?php if (isset($_SESSION['user'])): ?>

    <!-- Dashboard -->
    <div class="card p-4 text-center shadow">
        <h2>Welcome, <?php echo $_SESSION['user']; ?></h2>
        <a href="?logout=true" class="btn btn-danger mt-3">Logout</a>
    </div>

<?php else: ?>

    <div class="row justify-content-center">
        <div class="col-md-4">

            <?php if (isset($msg)) echo "<div class='alert alert-info'>$msg</div>"; ?>

            <!-- Tabs -->
            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#login">Login</button>
                </li>
                <li class="nav-item">
                    <button class="nav-link" data-bs-toggle="tab" data-bs-target="#register">Register</button>
                </li>
            </ul>

            <div class="tab-content bg-white p-4 shadow">

                <!-- Login -->
                <div class="tab-pane fade show active" id="login">
                    <form method="POST">
                        <input type="email" name="email" class="form-control mb-2" placeholder="Email" required>
                        <input type="password" name="password" class="form-control mb-2" placeholder="Password" required>
                        <button name="login" class="btn btn-success w-100">Login</button>
                    </form>
                </div>

                <!-- Register -->
                <div class="tab-pane fade" id="register">
                    <form method="POST">
                        <input type="text" name="username" class="form-control mb-2" placeholder="Username" required>
                        <input type="email" name="email" class="form-control mb-2" placeholder="Email" required>
                        <input type="password" name="password" class="form-control mb-2" placeholder="Password" required>
                        <button name="register" class="btn btn-primary w-100">Register</button>
                    </form>
                </div>

            </div>

        </div>
    </div>

<?php endif; ?>

</div>

<!-- Bootstrap JS -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>
