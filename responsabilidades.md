-keyboard: padre=> Tiene las función de marcar.(hace)
-key: hijo => LLama a la función de marcar.(recibe)
-actions: padre => Tiene las funciónes de llamar/colgar.(hace)
-action: hijo => Llama a la función de llamar/colgar(recibe),presentacional.
-display: hijo => Recibe los números marcados.(recibe),presentacional.
-info: Recibe la segunda propiedad del estado : llamando o colgado.(recibe),presentacional.

---

El estado es un objeto:
{
número: number;
estado:"llamando..."|"colgado";
}
Si el estado tiene un .length de 9, se activa la tecla de llamar.
