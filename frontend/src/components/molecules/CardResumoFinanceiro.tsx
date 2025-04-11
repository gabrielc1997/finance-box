import React from 'react'

type Props = {
  titulo: string
  valor: number
  tipo?: 'entrada' | 'saida' | 'saldo'
}

export const CardResumoFinanceiro: React.FC<Props> = ({ titulo, valor, tipo = 'saldo' }) => {
  const cor =
    tipo === 'entrada'
      ? 'text-green-600'
      : tipo === 'saida'
      ? 'text-red-600'
      : 'text-blue-600'

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-full max-w-sm">
      <h3 className="text-sm font-medium text-gray-500">{titulo}</h3>
      <p className={`text-2xl font-bold ${cor}`}>
        {valor.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
    </div>
  )
}