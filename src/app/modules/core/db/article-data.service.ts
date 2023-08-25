import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {


  articlesData : Article[] = [
    {
      id: 1,
      title: "¿Qué es “Machine Learning”?",
      category: "Introduccion Machine Learning",
      topics: "1",
      parapgraph: 
        [
          "Cuando se realiza una busqueda sobre que es machine learning los resultados son tantos y variados e incluso no parece haber concenso sobre una definicion que pueda resumir en palabras a este campo de estudio. Es por esto que varios exponentes de la industria han realizados sus propias ",
          "En resumen podemos decir que cuando preguntamos que es machine learnig podemos estar de acuerdo que se trata de una rama de la Inteligencia artificial en la cual los sistemas y las máquinas aprenden automáticamente a partir de los datos en lugar de ser programados explícitamente. En el campo del machine learning, se desarrollan algoritmos y modelos estadísticos que permiten a las máquinas procesar grandes cantidades de datos históricos para identificar patrones y realizar inferencias. Estos patrones y conocimientos adquiridos a partir de los datos les permiten a las máquinas realizar tareas y tomar decisiones con mayor precisión.",
          "Pude que exista un poco de ruido, pues se hemos hablado de Inteligencia Artificial y Machine Learning. A menudo estos terminos son tratados como sinonimos, pero la realidad no puede estar mas lejos. Mientras que la Inteligencia Artificial abarca un espectro más amplio de tecnologías y enfoques para lograr que las máquinas imiten ciertos aspectos de la inteligencia humana, el Machine Learning se destaca como una técnica específica que ha ganado una gran relevancia debido a su capacidad para permitir que las máquinas aprendan y se adapten automáticamente a partir de datos. ",
          "",
          "Data Mining es otro termino que se a puesto de moda ultimamente. El aprendizaje automático se centra en construir modelos para hacer predicciones a partir de datos, mientras que la minería de datos se enfoca en descubrir patrones y relaciones en conjuntos de datos sin necesariamente predecir. Ambos buscan conocimiento, pero con enfoques diferentes. ",
          `Aplicaciones de ML:
          /t/n1. Procesamiento del Lenguaje Natural (NLP): Traducción automática, análisis de sentimientos, chatbots.
          /t/n2. Visión por Computadora: Reconocimiento facial, diagnóstico médico, vehículos autónomos.
          /t/n3. Recomendaciones Personalizadas: Plataformas como Netflix.
          /t/n4. Finanzas: Análisis de riesgo, detección de fraudes.
          /t/n5. Salud: Diagnóstico, análisis de imágenes.
          /t/n6. Manufactura e Industria: Optimización de la cadena de suministro.
          /t/n7. Marketing y Publicidad: Personalización, segmentación de audiencias.
          /t/n8. Agricultura: Monitoreo, predicción de cosechas.
          /t/n9. Educación: Personalización del aprendizaje, evaluación automática.
          /t/n10. Seguridad: Detección de amenazas, seguridad cibernética.
          `
        ],
      callouts:
        [
          {
            legend: "Def IBM",
            paragraph: "Machine learning es una forma de la IA que permite a un sistema aprender de los datos en lugar de aprender mediante la programación explícita. "
          },
          {
            legend: "Def AWS",
            paragraph: "El machine learning es la ciencia de desarrollo de algoritmos y modelos estadísticos que utilizan los sistemas de computación con el fin de llevar a cabo tareas sin instrucciones explícitas, en vez de basarse en patrones e inferencias. Los sistemas de computación utilizan algoritmos de machine learning para procesar grandes cantidades de datos históricos e identificar patrones de datos. Esto les permite generar resultados con mayor precisión a partir de un conjunto de datos de entrada."
          },
          {
            legend: "Def BBVA",
            paragraph: "El ‘machine learning’ –aprendizaje automático– es una rama de la inteligencia artificial que permite que las máquinas aprendan sin ser expresamente programadas para ello. Una habilidad indispensable para hacer sistemas capaces de identificar patrones entre los datos para hacer predicciones"
          }
        ],
        intrestLinks : [
          {
            text: "Herramientas para el desarrollo de ML",
            link: "http://localhost:4200/main/article/2"
          }
        ],
        publishedDate: new Date("2023/08/20"),
        tags : [
          "Investigacion",
          "Introduccion a Machine Learning"
        ]
    },
    {
      id: 2,
      title: "Herramientas para el desarrollo de ML",
      category: "1",
      topics: "1",
      parapgraph: [],
      callouts: [],
      intrestLinks: [{
          text: "string",
          link: "http://localhost:4200/main/article/3",
      }],
      tags : []
    },
    {
      id: 3,
      title: "Un primer acercamiento a las herramientas de ML, RapidMiner, Excel, JupyerLabs",
      category: "1",
      topics: "1",
      parapgraph: [],
      callouts: [],
      tags: []
    }
  ]

  constructor() { }
}
