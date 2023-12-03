import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class UTopics {

  public descriptionUT: { [key: string]: string } = {
    "Introduccion a Machine Learning": "Este tema tiene como objetivo primario el presentar la temática del aprendizaje automático, proveyendo un marco de trabajo aplicado y con enfoque industrial.",
    "Tratamiento previo de los datos y fundamentos de los algoritmos de ML": "Este tema se centra en: realzar la importancia del conocimiento de la naturaleza del problema abordado y los datos relativos al mismo, para entonces analizar las diversas herramientas disponibles para el tratamiento inicial de los datos. Revisar los fundamentos generales de los algoritmos de Aprendizaje Automático, e Introducir las técnicas habitualmente utilizadas para la prueba y validación de modelos de ML",
    "Algoritmos Lineales": "En este tema se trabajará y se realizará los primeros acercamientos a los algoritmos de ML, empezando por algoritmos sencillos lineales, profundizando también el estudio de la preparación previa de los datos y las técnicas de validación de los modelos.",
    "Algoritmos No Lineales": "En esta unidad de aprendizaje se abordarán diversos algoritmos no lineales de aprendizaje automático, analizando su aplicabilidad a diversos problemas y los requerimientos que imponen en la preparación previa de los datos involucrados.",
    "Clustering y Modelos Jerárquicos" : "Principales algoritmos utilizados en aprendizaje no supervisado, analizando su aplicabilidad a diversos problemas y los requerimientos que imponen en la preparación previa de los datos involucrados. ",
  }

    constructor() {}


}