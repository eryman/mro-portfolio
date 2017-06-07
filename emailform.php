<?php

    $to = $_POST['destination'];
    $subject = 'New message for MRO Developers';
    $message = $_POST['message'] .'
        
    '.$_POST['name'] . '
    '.$_POST['phone'] . '
    '.$_POST['email'];
    mail($to, $subject, $message);

    echo json_encode(array('status' => 'success'));

?>