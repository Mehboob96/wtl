<!DOCTYPE html>
<html>
    <head><title>Welcome to PHP</title></head>
    <body>
        <?php
            echo "<h1>Welcome to PHP</h1>";
            if($_POST){
                $username=$_POST['username'];
                $brand=$_POST['brand'];
                echo "<br><h3>Thankyou! $username,you voted for $brand</h3>";
                
                die();
            }
        ?>
        <form method="POST" action="phpexample.php">
            <label for="usr">User Name</label>
            <input type="text" name="username" id="username">
            <p>Please Vote for your Favorite Brand</p>
            <label><input type="radio" name="brand" id="nokia" value="Nokia">Nokia</label>
            <label><input type="radio" name="brand" id="Apple" value="Apple">Apple</label>
            <label><input type="radio" name="brand" id="Samsung" value="Samsung">Samsung</label>
            <label><input type="radio" name="brand" id="HTC" value="HTC">HTC</label>
            <label><input type="radio" name="brand" id="ASUS" value="Asus">ASUS</label>
        
            <input type="submit" value="Vote">
        </form>
        
    </body>
</html>