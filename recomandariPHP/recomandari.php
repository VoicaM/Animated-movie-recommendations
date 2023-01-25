<?php 
    require ('./conn.php');

    function efectGET($cnx) {
        $elem = [];
        $cda = "SELECT * FROM recomandari";
        if ($rez = mysqli_query($cnx,$cda)) {
            while ($lin = mysqli_fetch_assoc($rez)) {
                $elem[] = $lin;
            }
            mysqli_free_result($rez);
        }
        echo json_encode($elem);
    }  
    
    function efectPOST($cnx) {
        $sir = citeste();
        $src = $sir['src']; 
        $titlu = $sir['titlu']; 
        $an = $sir['an']; 
        $durata = $sir['durata'];
        $descriere = $sir['descriere'];
        $rating = $sir['rating'];

        $rasp = [];
        $stmt = mysqli_prepare($cnx, "INSERT INTO recomandari(src, titlu, an, durata, descriere, rating) VALUES (?, ?, ?, ?, ?, ?)");
        mysqli_stmt_bind_param($stmt, 'ssissd', $src, $titlu, $an, $durata, $descriere, $rating);
        
        if(mysqli_stmt_execute($stmt)) {
            $rasp[] = ['rezultat' => "OK"];
            $rasp[] = ['id' => mysqli_stmt_insert_id ($stmt)];
        } else {
            $rasp[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
        }
        echo json_encode($rasp); 
    }
  
    function efectPATCH($cnx) {
        $sir = citeste();
        $id = $sir['id']; 
        $src = $sir['src']; 
        $titlu = $sir['titlu']; 
        $an = $sir['an']; 
        $durata = $sir['durata'];
        $descriere = $sir['descriere'];
        $rating = $sir['rating'];

        $rasp = [];
        $stmt = mysqli_prepare($cnx, "update recomandari SET src=?, titlu=?, an=?, durata=?, descriere=?, rating=? WHERE id=?");
        mysqli_stmt_bind_param($stmt, 'ssissdi', $src, $titlu, $an, $durata, $descriere, $rating, $id);
        if(mysqli_stmt_execute($stmt)) {
            $rasp[] = ['rezultat' => "OK"];
        } else {
            $rasp[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
        }
        echo json_encode($rasp);
    }

    function efectDELETE($cnx) {
        $sir = citeste();
        $id = $sir['id'];

        $cda = "DELETE FROM recomandari WHERE id = $id";
        $rasp = [];

        if (mysqli_query($cnx, $cda)) {
            $rasp[] = ['rezultat' => "OK"];
        } else {
            $rasp[] = ['rezultat' => 'Eroare: ' . mysqli_error($cnx)];
        }
        echo json_encode($rasp);
    } 

    function citeste() {
        $json = file_get_contents('php://input');
        $sir = json_decode($json, true); 
        return $sir;
    }
    
    $met = $_SERVER['REQUEST_METHOD'];
    switch ($met) {
        case 'GET':
            efectGET($cnx);  
            break;
        
        case 'POST':
            efectPOST($cnx);  
            break;
      
        case 'PATCH':
            efectPATCH($cnx);  
            break;

        case 'DELETE':
            efectDELETE($cnx);  
            break;
    }

    mysqli_close($cnx);
?>