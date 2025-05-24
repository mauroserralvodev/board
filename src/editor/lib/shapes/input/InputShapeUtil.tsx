import { generateResponse } from "@/app/actions/ai/instruction";
import { TLInputProps, TLInputShape } from "@/editor/schema/TLInput";
import { cn } from "@/lib/utils";
import { Lock, LockOpen, Play } from "lucide-react";
import { ShapeUtil, RecordProps, T, Rectangle2d, Geometry2d, HTMLContainer, TldrawUiButton, TLResizeInfo, resizeBox, TLArrowBinding, TLBinding } from "tldraw";


export class InputShapeUtil extends ShapeUtil<TLInputShape> {
    static override type = "input" as const;
    static override props: RecordProps<TLInputShape> = {
        w: T.number,
        h: T.number,
        text: T.string,
        name: T.string,
    }
    getDefaultProps(): TLInputProps {
        return {
            w: 300,
            h: 200,
            text: "Write a poem",
            // Nombre del componente
            name: "Input",
        }
    }
    getGeometry(shape: TLInputShape): Geometry2d {
        return new Rectangle2d({
            width: shape.props.w,
            height: shape.props.h,
            isFilled: true,
        })
    }

    // Definimos como se vera el custom shape
    component(shape: TLInputShape) {

        // Para saber si el shape esta bloqueado (true o false)
        const isLocked = this.editor.getShape(shape)?.isLocked;

        const handleLock = () => {
            this.editor.updateShape({
                id: shape.id,
                type: shape.type,
                isLocked: !shape.isLocked 
            })
        }

        const filterTerminals = (bindings: TLBinding[], terminalType: "start" | "end"): TLArrowBinding[] => {
            return bindings.filter((bindings): bindings is TLArrowBinding => {
                return bindings.props && "terminal" in bindings.props && bindings.props.terminal === terminalType
            })
        }

        const getShapeFromBindings = (binding: TLArrowBinding[]): TLInputShape[] => {
            return binding.map((binding) => 
                this.editor.getShape(binding.toId)
            ) as TLInputShape[]
        }

        const handleInstruction = async (shape: TLInputShape) => {
            const arrowBindings = this.editor.getBindingsInvolvingShape(shape.id, "arrow")
            
            const arrowShapes = arrowBindings.map(b=> this.editor.getBindingsFromShape(b.fromId, "arrow"))
            const allArrowBindings = arrowShapes.flat()

            const startTerminals = filterTerminals(allArrowBindings, "start");
            const endTerminals = filterTerminals(allArrowBindings, "end");

            const startShapes = getShapeFromBindings(startTerminals);
            const endShapes = getShapeFromBindings(endTerminals);

            // if (startShapes.length === 0 || endShapes.length === 0) return;

            const shapeInfo = startShapes.map(s => ({
                type: s.type,
                text: s.props.text
            }))

            const response = await generateResponse(shapeInfo)

            console.log(response)

            // endShapes.forEach(endShape => {
            //     this.editor.updateShape({
            //         id: endShape.id,
            //         type: endShape.type,
            //         props: {
            //             text: response
            //         }
            //     })
            // })

        }

        return(
            <HTMLContainer 
                className={cn(`flex flex-col bg-white border border-neutral-200 rounded-lg overflow-hidden shadow-md backdrop-blur-sm`, 
                `w-[${shape.props.w}px]`, `h-[${shape.props.h}px]`
                )}>
                <div className="flex justify-between items-center bg-neutral-50"
                style={{ borderBottom: "1px solid rgba(147, 51, 234, 0.05)"}}>
                    <div className="text-sm ml-2 py-1.5 pl-2"
                        // style={{ fontFamily: 'tldraw_draw, sans-serif' }}
                        >
                        {shape.props.name}
                    </div>
                    <div className="flex gap-1 items-center justify-end">
                        {/* Boton de Bloqueo */}
                            <TldrawUiButton 
                                type="icon" 
                                className="w-8 h-8 p-0" 
                                // para poder usar el icono (sino al pulsar detectaria que estamos pulsando sobre el componente completo)
                                onPointerDown={(e) => {
                                    e.stopPropagation();
                                }}
                                onClick={handleLock}
                            >
                                {isLocked ? <Lock className="w-4 h-4" /> : <LockOpen className="w-4 h-4"/>}

                            </TldrawUiButton>

                        {/* Boton de Play */}
                            <TldrawUiButton 
                                type="icon" 
                                className="w-8 h-8 p-0" 
                                onPointerDown={(e) => {
                                    e.stopPropagation();
                                }}
                                onClick={() => handleInstruction(shape)}
                            >
                                <Play className="w-4 h-4"/>

                            </TldrawUiButton>
                    </div>
                </div>
            </HTMLContainer>
        )
    }


    indicator(shape: TLInputShape) {
        return (
            <rect
                width={shape.props.w}
                height={shape.props.h}
                rx={4}
                ry={4}
                strokeDasharray="8, 2"
                strokeWidth={1.5}
                stroke="rgba(219, 39, 119, 0.8)"
                fill="none"
            />
        )
    }

    // Para poder conectar los shapes entre ellos
    override canBind(){
        return true;
    }
    // Para poder editar (redimensioonar etc)
    override canEdit(){
        return true;
    }
    // Para poder redimensionar
    override canResize(){
        return true;
    }
    // La relacion de aspecto NO esta bloqueada
    override isAspectRatioLocked(){
        return false;
    }

    override onResize(shape: TLInputShape, info: TLResizeInfo<TLInputShape>) {
        return resizeBox(shape, info);    
    }


}