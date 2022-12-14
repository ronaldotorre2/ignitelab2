import { CheckCircle } from 'phosphor-react';

export function Lesson() {
    return (
        <a href="#">
            <span className="text-gray-300">
                Title
            </span>
            <div className="rounded border border-gray-500 p-4 mt-2">
                <header  className="flex items-center justify-between">
                    <span className="text-sm text-blue-500 font-medium flex gap-2">
                        <CheckCircle size={20}/> 
                        Conteúdo Liberado
                    </span>
                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-green-300 font-bold">
                        Ao Vivo
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    Abertura do evento
                </strong>
            </div>
        </a>
    )
}