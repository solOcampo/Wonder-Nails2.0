import React, { Component } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#ebc7c7',
    headerFontColor: '#fff',
    headerFontSize: '20px',
    botBubbleColor: '#ebc7c7',
    botFontColor: '#fff',
    userBubbleColor: '#DDD7D9',
    userFontColor: '#fff',
}

export default class Contenido extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <ChatBot 
                    steps={[
                        {
                            id: "1",
                            message: "Hola. Soy un chatbot. ¿Cómo te llamas?",
                            trigger: "2"
                        },
                        {
                            id: "2",
                            user: true,
                            validator: (value) => {
                                if (/^[A-Z]{1}[a-z]{2,15}$/.test(value)) {
                                    return true;
                                }
                                else {
                                    return 'Por favor ingresa un nombre valido.';
                                }
                            },
                            trigger: "3"
                        },
                        {
                            id: "3",
                            message: "Hola {previousValue},¡encantado de conocerte!",
                            trigger: "4",

                        },
                        {
                            id: "4",
                            message: "Puedo ayudarte en algo?",
                            trigger: "5"
                        },
                        {
                            id: "5",
                            options: [
                                {value: "y", label: "Si", trigger: "6A"},
                                {value: "n", label: "No", trigger: "6B"},
                            ]
                        },
                        {
                            id: "6A",
                            message: "Genial! Dime qué estás buscando...",
                            trigger: "seleccion"
                        },
                        {
                            id: "6B",
                            message: "Lo siento si no puedo ser de ayuda para usted. Hasta luego",
                            end: true
                        },
                        {
                            id: "seleccion",
                            options: [
                                {value: "p", label: "Productos", trigger: "7A"},
                                {value: "e", label: "Envios", trigger: "7B"},
                            ]
                        },
                        {
                            id: "7A",
                            message: "Lo mejor de los esmaltes Wonder Nails es que nuestras lacas, además de ser hipoalergénicas y veganas (porque son libres de toxicos y no las testeamos en animalitos), tienen una duración de hasta 7 días de adherencia. Y la gloria es que su fluidez permite una fácil aplicación y muy buen tiempo de secado! Están compuestos por alta concentración de pigmentos y enriquecidos con activos naturales que permiten proteger las uñas y lucir los colores más lindos. Incorporamos a nuestras fórmulas ingredientes activos como aceites, vitaminas y minerales.",
                            trigger: "p"
                        },
                        {
                            id: "7B",
                            message: "continuara",
                            trigger: "e"
                        },
                        {
                            id: "p",
                            options: [
                                {value: "Angular_(framework)", label: "Servicios", trigger: "9"},
                                {value: "React", label: "Contacto", trigger: "9"},
                                {value: "Vue.js", label: "Ubicacion", trigger: "9"},
                            ]
                        },
                        {
                            id: "e",
                            options: [
                                {value: "Spring_Framework", label: "Esmaltes", trigger: "9"},
                                {value: "Laravel", label: "Otros", trigger: "9"},
                                {value: ".NET_Core", label: ".Marcas", trigger: "9"},
                            ]
                        },
                        {
                            id: "9",
                            component: 'Wonder Nails',
                            asMessage: true,
                            trigger: "preguntaVuelta"
                        },
                        {
                            id: "preguntaVuelta",
                            message: "¿Necesitas algo más??",
                            trigger: "respuestaVuelta",
                        }, 
                        {
                            id: "respuestaVuelta",
                            options: [
                                {value: "y", label: "Si", trigger: "6A"},
                                {value: "n", label: "No", trigger: "6B"},
                            ],
                        }
                    ]}
                />
            </ThemeProvider>
        )
    }
}