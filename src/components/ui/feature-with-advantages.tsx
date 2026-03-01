import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Платформа Тукая</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Возможности платформы
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              Погружайтесь в мир поэзии Тукая через интерактивные форматы — от стихов до творческих мастерских.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Тематические подборки</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Стихи по настроению и тематике — от лирики до патриотических произведений.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Викторины и кроссворды</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Интерактивные задания на знание текстов и биографии поэта.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Творческая мастерская</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Написание своих стихов, рисование иллюстраций и запись декламаций.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Система достижений</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">Награды и значки за выполненные задания и прогресс в изучении.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Личный кабинет</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Отслеживайте прогресс и синхронизируйте данные между устройствами.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Форум и обсуждения</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Делитесь впечатлениями и обсуждайте произведения с другими читателями.
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