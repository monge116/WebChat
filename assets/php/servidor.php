<?php
require_once("BBDD_CTRLR.php");

if (isset($_REQUEST['peticion'])) {
    switch ($_REQUEST['peticion']) {
        case "CargarUsuarios":           
            $sql = "SELECT * FROM usuario ORDER BY id";
            $datos['sql']=$sql;
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);  
            break;

        case "CargarInfoUsuario":
            $id= $_REQUEST['id'];
            $sql = "SELECT * FROM usuario WHERE id = $id";
            $datos['sql']=$sql;
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);  
            break; 
        case "ModificarUsuario";
            $sql = $_REQUEST['sql'];
            $devolucion = $_REQUEST['devolucion'];
            $datos['datos'] = BBDD_CTRLR::CRUD($sql,$devolucion);
            echo json_encode($datos);  
            break;

            
        case "CargarPreguntas":           
            $sql = "SELECT * FROM preguntas ORDER BY pr_id";
            $datos['sql']=$sql;
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);  
            break;
        // case "EjecutarSQL":
        //     $sql = $_REQUEST['sql'];
        //     $datos['datos'] = BBDD_CTRLR::Consultas($sql);
        //     echo json_encode($datos);  
        //     break;
        case "EjecutarCRUD":
            $sql = $_REQUEST['sql'];
            $devolucion = $_REQUEST['devolucion'];
            $datos['datos'] = BBDD_CTRLR::CRUD($sql,$devolucion);
            echo json_encode($datos);  
            break;




        
        case "CursoInsertar":
            $nombre = $_REQUEST['cur_nombre'];
            $sql = "INSERT INTO cursos VALUES (null, '$nombre')";
            $datos['sql']=$sql;
            $datos['datos'] = BBDD_CTRLR::CRUD($sql, 'i');
            echo json_encode($datos);  
            break; 
        case "CursoModificar":
            $id = $_REQUEST['cur_id'];
            $nombre = $_REQUEST['cur_nombre'];
            $sql = "UPDATE cursos SET cur_nombre = '$nombre' WHERE cur_id = $id";
            $datos['sql']=$sql;
            $datos['datos'] = BBDD_CTRLR::CRUD($sql, '');
            echo json_encode($datos);  
            break;
        case "CursoBorrar":
            $id = $_REQUEST['cur_id'];
            $sql = "DELETE FROM cursos WHERE cur_id = $id";
            $datos['sql']=$sql;
            $datos['datos'] = BBDD_CTRLR::CRUD($sql, '');
            echo json_encode($datos);  
            break;
        
        case "CargarAsignaturas":
            $sql = "SELECT  c.cur_nombre, a.*
                    FROM cursos as c LEFT JOIN asignaturas as a
                    ON c.cur_id = a.as_cur_id
                    ORDER BY c.cur_nombre, a.as_nombre";
            $datos['sql']=$sql;
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);  
            break;
     
        

                case "AsignaturaInsertar":
                    $nombre = $_REQUEST['as_nombre'];
                    $as_cur_id=$_REQUEST['as_cur_id'];
                    $sql = "INSERT INTO asignaturas VALUES (null, '$nombre',$as_cur_id)";
                    $datos['sql']=$sql;
                    $datos['datos'] = BBDD_CTRLR::CRUD($sql, 'i');
                    echo json_encode($datos);  
                    break; 

                    case "AsignaturaModificar":
                        $id = $_REQUEST['as_id'];
                        $nombre = $_REQUEST['as_nombre'];
                        $sql = "UPDATE asignaturas SET as_nombre = '$nombre' WHERE as_id = $id";
                        $datos['sql']=$sql;
                        $datos['datos'] = BBDD_CTRLR::CRUD($sql, '');
                        echo json_encode($datos);  
                        break;
                    case "AsignaturaBorrar":
                        $id = $_REQUEST['as_id'];
                        $sql = "DELETE FROM asignaturas WHERE as_id = $id";
                        $datos['sql']=$sql;
                        $datos['datos'] = BBDD_CTRLR::CRUD($sql, '');
                        echo json_encode($datos);  
                        break;

    }        
}