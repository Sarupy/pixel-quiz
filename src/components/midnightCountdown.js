import React, { useEffect, useState } from 'react';

export default function CountdownToMidnight()  {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  // Função para calcular o tempo restante até meia-noite
  const calculateTimeLeft = () => {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); // Próxima meia-noite
    const difference = midnight - now; // Diferença em milissegundos

    // Converte a diferença para horas, minutos e segundos
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { hours, minutes, seconds };
  };

  useEffect(() => {
    // Atualiza o tempo restante a cada segundo
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(timer);
  }, []);

  return (
    <>{`${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}
    </>
  );
};