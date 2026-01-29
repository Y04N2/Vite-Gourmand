<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

final class LegalController extends AbstractController
{
   #[Route('/mentions-legales', name: 'mentions_legales')]
   public function mentions(): Response
   {
      return $this->render('legal/mentions.html.twig');
   }

   #[Route('/conditions-vente', name: 'cgv')]
   public function cgv(): Response
   {
      return $this->render('legal/cgv.html.twig');
   }
}
