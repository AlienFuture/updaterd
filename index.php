<?php
include "JsonReader.php";

$jsonReader = new JsonReader("values.json");


?>

<!DOCTYPE html>
<html lang="hu">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="style.css" type="text/css">

    <script>
        function Reload() {
            location.replace("index.php");
        }
    </script>
    <title>Vád Calculator</title>
</head>

<body>
    <div class="jumbotron text-center">
        <h1>S.A.S.T's Vád Calculator</h1>
        <p>Jelölje be az elkövetett vádakat majd kattintson a generál gombra kiszámoláshoz</p>
        <p>By: Balage.</p>
    </div>
    <div class="d-flex justify-content-center">
        <form method="POST" action="index.php">
            <div class="row">
                <?php
                foreach ($jsonReader->getValues() as $type => $values) {
                ?>
                    <div class="col-sm-3">
                        <h3><?= $values['name'] ?></h3>
                        <?php
                        foreach ($values['values'] as $key => $value) {
                        ?>
                            <input type="checkbox" id="<?= $type . "-" . $key ?>" value="<?= $type . "-" . $key ?>" name="<?= $type . "-" . $key ?>">
                            <label for="<?= $type . "-" . $key ?>"><?= $value['label'] ?></label><br>
                        <?php
                        }
                        ?>
                    </div>
                <?php
                }
                ?>
            </div>
    </div>
    <input type="submit" class="btn btn-success" value="Indokok generálása...">
    <button class="btn btn-danger">Újratölt</button>

    </form>
    <div class="panel panel-heading">
        <span>
            <?php
            $price = 0;
            foreach ($_POST as $value) {
                $data = $jsonReader->getValuesByKey($value);
                $price += $data['price'];
                echo $data['label'] . ": " . $data['price'] . "$ ";
            }
            ?>
        </span>
        <?php if ($price != 0) {?>
        <h2><?= $price ?></h2>
        <h2><?= $price / 400 <= 120 ? round($price / 400) . " hónap" : "120 hónap" ?></h2>
        <?php }?>
    </div>
</body>

</html>