<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route(
        '/{reactRouting}', 
        name: 'app_index', 
        priority: -1, 
        defaults:["reactRouting" => null], 
        requirements: ["reactRouting" => ".+"]
    )]
    public function index(): Response
    {
        return $this->render('index/index.html.twig', [
            'controller_name' => 'IndexController',
        ]);
    }
}
