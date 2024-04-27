<?php
    $db_name = $_SERVER["DOCUMENT_ROOT"] . "MusicSite/Playlist Dataset.accdb";
    if (!file_exists($db_name)) {
        die("Error 404 - Could not find playlist database");
    }
    $db = new PDO("odbc:DRIVER={Microsoft Access Driver (*.accdb)}; DBQ=$db_name; Uid=; Pwd=;");
?>