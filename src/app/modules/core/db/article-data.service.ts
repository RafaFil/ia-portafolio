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
          "<p>Cuando se realiza una busqueda sobre que es machine learning los resultados son tantos y variados e incluso no parece haber concenso sobre una definicion que pueda resumir en palabras a este campo de estudio. Es por esto que varios exponentes de la industria han realizados sus propias definiciones</p>",
          "<p>En resumen podemos decir que cuando preguntamos que es machine learnig podemos estar de acuerdo que se trata de una rama de la Inteligencia artificial en la cual los sistemas y las máquinas aprenden automáticamente a partir de los datos en lugar de ser programados explícitamente. En el campo del machine learning, se desarrollan algoritmos y modelos estadísticos que permiten a las máquinas procesar grandes cantidades de datos históricos para identificar patrones y realizar inferencias. Estos patrones y conocimientos adquiridos a partir de los datos les permiten a las máquinas realizar tareas y tomar decisiones con mayor precisión.</p>",
          "<p>Pude que exista un poco de ruido, pues se hemos hablado de Inteligencia Artificial y Machine Learning. A menudo estos terminos son tratados como sinonimos, pero la realidad no puede estar mas lejos. Mientras que la Inteligencia Artificial abarca un espectro más amplio de tecnologías y enfoques para lograr que las máquinas imiten ciertos aspectos de la inteligencia humana, el Machine Learning se destaca como una técnica específica que ha ganado una gran relevancia debido a su capacidad para permitir que las máquinas aprendan y se adapten automáticamente a partir de datos.</p>",
          "<p>",
          "<p>Data Mining es otro termino que se a puesto de moda ultimamente. El aprendizaje automático se centra en construir modelos para hacer predicciones a partir de datos, mientras que la minería de datos se enfoca en descubrir patrones y relaciones en conjuntos de datos sin necesariamente predecir. Ambos buscan conocimiento, pero con enfoques diferentes.</p>",
          `<h4>Aplicaciones de ML:</h4>
          <ul>
          <li>Procesamiento del Lenguaje Natural (NLP): Traducción automática, análisis de sentimientos, chatbots.</li>
          <li>Visión por Computadora: Reconocimiento facial, diagnóstico médico, vehículos autónomos.</li>
          <li>Recomendaciones Personalizadas: Plataformas como Netflix.</li>
          <li>Finanzas: Análisis de riesgo, detección de fraudes.</li>
          <li>Salud: Diagnóstico, análisis de imágenes.</li>
          <li>Manufactura e Industria: Optimización de la cadena de suministro.</li>
          <li>Marketing y Publicidad: Personalización, segmentación de audiencias.</li>
          <li>Agricultura: Monitoreo, predicción de cosechas.</li>
          <li>Educación: Personalización del aprendizaje, evaluación automática.</li>
          <li>Seguridad: Detección de amenazas, seguridad cibernética.</li>
        </ul>
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
      parapgraph: [
        `
        <h2>RapidMiner</h2>
        <p><strong>URL:</strong> <a href="https://rapidminer.com/">https://rapidminer.com/</a></p>
        <h3>Características Principales:</h3>
        <ul>
        <li>Funcionalidades de Tratamiento de Datos: RapidMiner ofrece herramientas para limpiar, transformar y manipular datos.</li>
        <li>Funcionalidades de Algoritmos: Amplia colección de algoritmos de ML listos para usar.</li>
        <li>Funcionalidades de Prueba y Validación: Incluye herramientas para evaluar y validar modelos.</li>
        <li>Integración: Puede ejecutar flujos de trabajo en la nube y desplegar modelos en servicios web.</li>
        </ul>

        <h2>Weka</h2>
        <p><strong>URL:</strong> <a href="https://www.cs.waikato.ac.nz/ml/weka/">https://www.cs.waikato.ac.nz/ml/weka/</a></p>
        <h3>Características Principales:</h3>
        <ul>
        <li>Funcionalidades de Tratamiento de Datos: Weka proporciona herramientas para el preprocesamiento de datos.</li>
        <li>Funcionalidades de Algoritmos: Incluye una amplia gama de algoritmos de aprendizaje supervisado y no supervisado.</li>
        <li>Funcionalidades de Prueba y Validación: Ofrece utilidades para evaluar modelos mediante validación cruzada y métricas de evaluación.</li>
        <li>Integración: Puede integrarse con otras aplicaciones a través de interfaces de programación.</li>
        </ul>
        <h2>TensorFlow</h2>
        <p><strong>URL:</strong> <a href="https://www.tensorflow.org/">https://www.tensorflow.org/</a></p>
        <h3>Características Principales:</h3>
        <ul>
        <li>Funcionalidades de Tratamiento de Datos: TensorFlow proporciona herramientas para la manipulación y preprocesamiento de datos.</li>
        <li>Funcionalidades de Algoritmos: Es popular para la creación y entrenamiento de modelos de ML y DL.</li>
        <li>Funcionalidades de Prueba y Validación: Proporciona herramientas para evaluar y validar modelos, y realizar inferencias en nuevos datos.</li>
        <li>Integración: Altamente versátil y se puede integrar en diferentes aplicaciones y entornos.</li>
        </ul>
        `
      ],
      callouts: [],
      intrestLinks: [{
          text: "string",
          link: "http://localhost:4200/main/article/3",
      }],
      tags : [
        "Investigacion",
        "Introduccion a Machine Learning",
        "RapidMiner",
        "TensorFlow",
        "Weka"
      ]
    },
    {
      id: 3,
      title: "Un primer acercamiento a las herramientas de ML, RapidMiner, Excel, JupyerLabs",
      category: "1",
      topics: "1",
      parapgraph: [
        `
      <p> Como vimos anteriormente para mineria de datos tenemos muchisimas opciones, y todas con mas o menos las mismas caracteristicas.
      La idea ahora es realizar un primer acercamiento a estos tres. Para esto se estudiara el dataset del proyecto Iris disponible en: 
      https://archive.ics.uci.edu/dataset/53/iris.</p>
      <p>Se estudiara la media, la desviacion estandar, la varianza de cada atributo asi como tambien la cantidad de cada muestra de
      la variable objetivo</p>
      <h3>Excel</h3>
      Los pasos a seguir en el Excel es importar el dataset y realizar las funciones
      <p></p>
      <a href="https://github.com/RafaFil/ia-portafolio/blob/dev/docs/ut1/pd/PD2.xlsx">Enlace a la plantilla de Excel</a>
      </p>
      <h3>RapidMiner</h3>
      RapidMiner a diferencia de excel se utilizan operadores y se conectan entre ellos, tal como se muestra en la imagen:

      <img class="img-fluid" src="../../../../../../assets/img/rm_ut1_pd2.png">

      <h5>En resumen:</h5>
      <p>Se llega a la conclusion que sin importar cual de las dos herramientas se utilizen cualquiera de las dos cumple y realiza los mismos calculos</p>

      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>Columna</th>
            <th>Media XLS</th>
            <th>Media RM</th>
            <th>DES XLS</th>
            <th>DES RM</th>
            <th>Varianza XLS</th>
            <th>Varianza RM</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sepal length</td>
            <td>5.84</td>
            <td>5.843</td>
            <td>0.82806613</td>
            <td>0.828</td>
            <td>0.68569351</td>
            <td>0.685</td>
          </tr>
          <tr>
            <td>sepal width</td>
            <td>3.054</td>
            <td>3.054</td>
            <td>0.43359431</td>
            <td>0.434</td>
            <td>0.18800403</td>
            <td>0.188</td>
          </tr>
          <tr>
            <td>petal length</td>
            <td>3.758</td>
            <td>3.759</td>
            <td>1.76442042</td>
            <td>1.764</td>
            <td>3.11317942</td>
            <td>3.113</td>
          </tr>
          <tr>
            <td>petal width</td>
            <td>1.198</td>
            <td>1.199</td>
            <td>0.76316074</td>
            <td>0.763</td>
            <td>0.58241432</td>
            <td>0.582</td>
          </tr>
        </tbody>
      </table>

      <h2>Conteo de la variable objetivo:</h2>
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>Clase</th>
            <th>Conteo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Iris-setosa</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Iris-versicolor</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Iris-virginica</td>
            <td>50</td>
          </tr>
        </tbody>
      </table>

      <h3>Jupyter Notebook</h3>
      <p>Jupyter Notebooks es un proyecto que coinsiste en </p>
      <p>Se utilizo la libreria pandas para el manejo de los datos</p>
      <p>Se puede observar que los resultados son exactamente los mismos que tanto en excel como en RapidMiner</p>
      <a href="https://github.com/RafaFil/ia-portafolio/blob/main/docs/ut1/pd/ut1_pd3.ipynb">Enlace al Jupyter</a>
        `
      ],
      callouts: [],
      tags: [
        "Investigacion",
        "Introduccion a Machine Learning",
        "Jupyter Notebooks",
        "RapidMiner"
      ]
    },
    {
      id: 4,
      title: "Procesos de mineria de datos: CRISP-DM (CRoss Industry Standard Process for Data Mining)",
      category: "1",
      topics: "1",
      parapgraph: [
        `
        <h2>CRISP-DM (Cross Industry Standard Process for Data Mining)</h2>
        <p>Como dice el nombre CRISP-DM es un proceso de minería de datos, es decir un enfoque analítico que implica descubrir patrones, tendencias y relaciones ocultas en conjuntos de datos grandes y complejos. Utiliza técnicas estadísticas y de aprendizaje automático para identificar información valiosa, lo que permite tomar decisiones informadas y generar conocimiento nuevo a partir de los datos.</p>
        <p>CRISP-DM consiste en 6 etapas:</p>
        <ol>
            <li>Entendimiento del negocio - ¿Qué necesita el negocio?</li>
            <li>Conocimiento de los datos - ¿Qué datos tenemos o necesitamos? ¿Están limpios?</li>
            <li>Preparación de los datos - ¿Cómo organizamos los datos para el modelado?</li>
            <li>Modelización - ¿Qué técnicas de modelización debemos aplicar?</li>
            <li>Evaluación - ¿Qué modelo cumple mejor los objetivos de la empresa?</li>
            <li>Implantación - ¿Cómo acceden las partes interesadas a los resultados?</li>
        </ol>

        <h2>SEMMA (Sample, Explore, Modify, Model, Assess)</h2>
        <table>
            <tr>
                <th>Similitudes</th>
                <td>SEMMA comparte muchas similitudes con CRISP-DM, ya que también se divide en etapas secuenciales, aunque con una estructura ligeramente diferente. Al igual que CRISP-DM, SEMMA también aborda la exploración de datos, el modelado y la evaluación de modelos.</td>
            </tr>
            <tr>
                <th>Diferencias</th>
                <td>Aunque las etapas básicas son similares, las fases y la forma en que se abordan ciertos aspectos pueden diferir. Por ejemplo, SEMMA se centra en la muestra inicial de datos antes de explorar y modificar, mientras que CRISP-DM prioriza la comprensión del negocio y los objetivos en las primeras etapas.</td>
            </tr>
        </table>

        <h2>KDD (Knowledge Discovery in Databases)</h2>
        <table>
            <tr>
                <th>Similitudes</th>
                <td>KDD es un proceso más amplio que abarca toda la gama de descubrimiento de conocimiento en bases de datos, que incluye preprocesamiento, transformación, minería de datos y visualización. Tiene similitudes con CRISP-DM en cuanto a la exploración de datos, la construcción de modelos y la evaluación de resultados.</td>
            </tr>
            <tr>
                <th>Diferencias</th>
                <td>CRISP-DM se enfoca específicamente en la minería de datos, mientras que KDD es un enfoque más amplio que también considera la adquisición de datos y la presentación de resultados. CRISP-DM también proporciona una estructura más detallada y específica para las fases y tareas.</td>
            </tr>
        </table>

        <h2>TDSP (Team Data Science Process)</h2>
        <table>
            <tr>
                <th>Similitudes</th>
                <td>TDSP se basa en gran medida en CRISP-DM y comparte similitudes en términos de etapas y tareas. Ambos procesos consideran la exploración de datos, la preparación de datos, la construcción de modelos y la evaluación de resultados.</td>
            </tr>
            <tr>
                <th>Diferencias</th>
                <td>TDSP se enfoca más en el trabajo en equipo y la colaboración, y también destaca la importancia de la implementación en producción de los modelos desarrollados. TDSP se adapta particularmente bien a proyectos de ciencia de datos en equipos grandes.</td>
            </tr>
        </table>

        <h2>Agile Data Science</h2>
        <table>
            <tr>
                <th>Similitudes</th>
                <td>Agile Data Science comparte algunas similitudes con CRISP-DM en términos de adaptabilidad y enfoque en la iteración. Ambos enfoques reconocen la necesidad de ajustar el proceso según las necesidades cambiantes.</td>
            </tr>
            <tr>
                <th>Diferencias</th>
                <td>Agile Data Science se basa en principios ágiles y se centra en la colaboración y la entrega rápida de resultados. A diferencia de CRISP-DM, que puede parecer más estructurado, Agile Data Science permite una mayor flexibilidad y ajuste sobre la marcha.</td>
            </tr>
        </table>
        `
      ],
      callouts: [],
      tags: [
        "Investigacion",
        "Introduccion a Machine Learning",
        "Mineria de Datos",
        "CRISP-DM"
      ]
    }
  ]

  constructor() { }
}
