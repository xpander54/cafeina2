
<?php header('Access-Control-Allow-Origin: *'); ?>
     
    <?php
      if(!$file = simplexml_load_file('http://holbox.in:8000/stats?sid=1')){
              $a = "error";
      }else{
              $a = json_encode($file);
      }
      print $a;
    ?> 
