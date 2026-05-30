import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">ИИ-ассистент</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Что умеет ваш новый ИИ-Ассистент
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              ИИ-ассистент для колориста — вы указываете параметры (исходный уровень, желаемый оттенок, длину корней, процент седины, данные об окрашенной базе), а нейросеть выдаёт готовую формулу с оксидом, временем выдержки и микстонами.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Натуральные волосы</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Тон в тон, темнее или светлее до 3 тонов.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Окрашенная база</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Совместимость оттенков, затемнение и осветление через порошок или аммиачный корректор.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Седина</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    До 30%, до 50%, 50% и более — точный подбор рецепта.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Пепельные и перламутровые</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Без зелени и грязи — ассистент знает все нюансы.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Блонд в тёмные оттенки</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Тонирование с препигментацией — без неожиданных результатов.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Декапирование</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Протокол кислотной смывки или порошка.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Цветовые бани</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Классическая, корректирующая, пигментирующая.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white flex-shrink-0" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Замена микстона</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Как смешать красители вместо микстона.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }