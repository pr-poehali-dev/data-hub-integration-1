import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">Тукай платформасы</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Платформа мөмкинлекләре
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              Тукай поэзиясе дөньясына интерактив форматлар аша чумыгыз — шигырьләрдән иҗади осталыкханәгә кадәр.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Тематик сайланмалар</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Кәеф һәм теманы буенча шигырьләр — лирикадан патриотик әсәрләргә кадәр.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Викториналар һәм кроссвордлар</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Текстларны һәм шагыйрь биографиясен белүгә интерактив биремнәр.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Иҗади осталыкханә</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Үз шигырьләреңне яз, иллюстрацияләр ясаx һәм тавыш яздыр.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Уңышлар системасы</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">Үтәлгән биремнәр һәм өйрәнүдәге алга бару өчен бүләкләр.</p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Шәхси кабинет</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Алга баруыгызны күзәтегез һәм биремнәрне җайланмалар арасында синхронлаштырыгыз.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-[1.05rem] h-[1.05rem] mt-2 text-white" strokeWidth={3} />
                <div className="flex flex-col gap-1">
                  <p className="text-white font-open-sans-custom">Форум һәм фикер алышу</p>
                  <p className="text-gray-300 text-sm font-open-sans-custom">
                    Тәэсирләрегезне уртаклашыгыз һәм башка укучылар белән әсәрләрне тикшерегез.
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
