import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { Tags } from '../enums/tags';
import { Tag } from 'primeng/tag';

const genericURL = "";

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
      ],
      publishedDate: new Date("2023/08/20"),
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
      <a href="https://github.com/RafaFil/ia-portafolio-docs/blob/main/UT1%20-%20INTRODUCCION%20A%20MACHINE%20LEARNING/pd/PD2.xslx">Enlace a la plantilla de Excel</a>
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
      <a href="https://github.com/RafaFil/ia-portafolio-docs/blob/main/UT1%20-%20INTRODUCCION%20A%20MACHINE%20LEARNING/pd/ut1_pd3.ipynb">Enlace al Jupyter</a>
        `
      ],
      callouts: [],
      tags: [
        "Investigacion",
        "Introduccion a Machine Learning",
        "Jupyter Notebooks",
        "RapidMiner"
      ],
      publishedDate: new Date("2023/08/20"),
      interestLink: []
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
      ],
      publishedDate: new Date("2023/08/20"),
      interestLink: []
    },
    {
      id: 5,
      title : "Manejo de datos en RapidMiner",
      category: "2",
      topics: "2",
      parapgraph: [
        `
    <div class="">
        <div class="row">
            <div class="col">
                <h2>Manejo de Datos</h2>
                <p>Existen dos grupos generales de manejo de datos: mezcla y limpieza. Vamos a ver operaciones para la limpieza de datos.</p>
                <table class="table">
                    <thead>
                        <tr>
                            <th>Proceso</th>
                            <th>Descripción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Mezcla</td>
                            <td>Consiste en transformar un conjunto de datos de un estado a otro o combinar múltiples conjuntos de datos.</td>
                        </tr>
                        <tr>
                            <td>Limpieza</td>
                            <td>Consiste en mejorar los datos para que la modelización arroje mejores resultados.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h3>Manejo de Valores Faltantes</h3>
                <p>Se puede ver en el análisis de los datos que (completar)</p>
                <p>Lo primero que se hace es una selección de atributos, en los cuales se excluyen los atributos Cabina y Lifeboat, ya que no son relevantes para el modelo. Cabina se excluye debido a los valores faltantes y Lifeboat porque no aporta.</p>
                <p>Una vez ejecutada la selección, todavía faltan valores faltantes en algunos atributos. Para esto, se utiliza el operador de reemplazo de valores faltantes. Se aplica al atributo Edad (Age).</p>
                <p>Se reemplazó el valor faltante de Edad con el valor promedio de Edad. Esta es una técnica común para manejar muchos valores faltantes en un atributo. Dado que solo quedan algunos valores faltantes, podemos filtrar de manera segura estos ejemplos del conjunto de datos.</p>
                <p>Finalmente, se aplica un filtro para eliminar las tuplas con valores faltantes.</p>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h3>Modelo</h3>
                <img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f33b32ff-bd08-448e-ae34-c75afb586ba0/Untitled.png" alt="Modelo" class="img-fluid">
            </div>
        </div>

        <div class="row">
            <div class="col">
                <h3>Normalización y Detección de Valores Atípicos</h3>
                <img src="https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ece28326-ac87-44d4-b156-31e11d4ff59a/Untitled.png" alt="Detección de Valores Atípicos" class="img-fluid">
                <blockquote>
                    <p>Otro paso importante en la limpieza de datos es identificar casos inusuales y eliminarlos del conjunto de datos. En algunas situaciones, los valores atípicos pueden ser los casos más interesantes (por ejemplo, detectar transacciones fraudulentas con tarjetas de crédito), pero en la mayoría de los casos, los valores atípicos son simplemente el resultado de una medición incorrecta y deben eliminarse del conjunto de datos.</p>
                    <footer>- RapidMiner</footer>
                </blockquote>
                <p>La primera parte es igual a la anterior, es decir, se excluyen los atributos que no serán útiles en el modelo en este caso: Cabina, Bote Salvavidas, Nombre y Número de Boleto.</p>
                <p>Luego se normalizan los valores del conjunto de datos. En general, la normalización es siempre necesaria cuando se aplican algoritmos basados en la distancia, como la detección de valores atípicos o el agrupamiento k-Means (que se aplicará más adelante).</p>
                <p>Utilizando los parámetros por defecto, el operador de **Normalización** realizará una *transformación z* (también conocida como estandarización), lo que resulta en un valor medio de 0 y una desviación estándar de 1 para cada atributo. En otras palabras, todos los atributos están en la misma escala después de la normalización y pueden compararse entre sí.</p>
                <p>Luego se agrega el operador para detectar valores atípicos, que detecta los 10 datos más alejados.</p>
                <p>Finalmente, se filtra el conjunto de datos donde el atributo "outlier" es falso.</p>
            </div>
        </div>
    </div>      
        `
      ],
      callouts: [],
      tags: [
        "Herramientas",
        "Tratamiento previo de los datos y fundamentos de los algoritmos de ML",
        "Mineria de Datos",
        "CRISP-DM",
        "RapidMiner"
      ],
      publishedDate: new Date("2023/09/05"),
      interestLink: []
    },
    {
      id: 6,
      title : "Construir un modelo en RapidMiner",
      category: "2",
      topics: "2",
      parapgraph: [
        `
        <div>
        <h2 class="mb-4">Modeling</h2>
        <img src="../../../../../../assets/img/ut2_pd2_modeling1.png" alt="Untitled" class="img-fluid mb-4">
    
        <p class="lead">La Modelización Predictiva es un conjunto de técnicas de aprendizaje automático que buscan patrones en conjuntos de datos voluminosos y utilizan esos patrones para crear predicciones en nuevas situaciones. Estas predicciones pueden ser categóricas (lo cual se denomina aprendizaje de clasificación) o numéricas (aprendizaje de regresión).</p>
    
        <p>En relación al conjunto de datos del Titanic, se van a emplear tres algoritmos de clasificación diferentes:</p>
    
        <ol>
          <li>
            <strong>Árbol de Decisión:</strong>
            <p>El árbol de decisión es un algoritmo que modela las decisiones y sus posibles consecuencias en forma de un árbol...</p>
          </li>
          <li>
            <strong>Naive Bayes (Bayes Ingenuo):</strong>
            <p>Naive Bayes es un clasificador de alto sesgo y baja varianza...</p>
            <p>El supuesto fundamental de Naive Bayes es que, dado el valor de la etiqueta (la clase), el valor de cualquier atributo es independiente del valor de cualquier otro atributo...</p>
          </li>
          <li>
            <strong>Rule Induction (Inducción de Reglas):</strong>
            <p>La inducción de reglas es un enfoque que busca identificar reglas if-then a partir de los datos de entrenamiento...</p>
            <p>El objetivo es crear un conjunto de reglas que pueda utilizarse para predecir la pertenencia de una instancia a una categoría en función de sus características...</p>
          </li>
        </ol>
    
        <p class="lead">Al ejecutar el Modelo encontramos los siguientes resultados:</p>
      </div>
      
      <code>
      RuleModel
    if Sex = Male and Passenger Fare ≤ 26.269 then No  (57 / 367)
    if Sex = Female and Passenger Class = First then Yes  (97 / 4)
    if Sex = Male and Passenger Fare > 31.137 then No  (33 / 90)
    if Passenger Class = Second and Age ≤ 28.500 then Yes  (36 / 4)
    if Passenger Fare ≤ 24.808 and Passenger Fare > 15.373 and Age > 29.441 then Yes  (18 / 3)
    if Passenger Fare ≤ 14.281 then Yes  (68 / 40)
    if Passenger Class = Third and Passenger Fare > 23.746 then No  (1 / 23)
    if Passenger Class = Second and Passenger Fare > 30.375 then Yes  (4 / 0)
    if No of Parents or Children on Board ≤ 0.500 and Age ≤ 30.441 and Passenger Fare ≤ 28.710 and Age > 28.500 then No  (1 / 8)
    if Age ≤ 54 then Yes  (33 / 22)
    if Age ≤ 71 then No  (0 / 6)
    else Yes  (0 / 0)
    
    correct: 750 out of 915 training examples.
      </code>
      
      <code>
      SimpleDistribution
    Distribution model for label attribute Survived
    
    
    Class Yes (0.381)
    6 distributions
    
    Class No (0.619)
    6 distributions
      
      </code>
      
      <img src="../../../../../../assets/img/ut2_pd2_modeling2.png"">
      
      <code>
    Tree
    Sex = Female
    |   No of Parents or Children on Board > 4.500: No {Yes=0, No=4}
    |   No of Parents or Children on Board ≤ 4.500
    |   |   No of Siblings or Spouses on Board > 4.500: No {Yes=0, No=2}
    |   |   No of Siblings or Spouses on Board ≤ 4.500
    |   |   |   Passenger Fare > 35.562: Yes {Yes=101, No=3}
    |   |   |   Passenger Fare ≤ 35.562
    |   |   |   |   No of Parents or Children on Board > 3.500: No {Yes=0, No=3}
    |   |   |   |   No of Parents or Children on Board ≤ 3.500
    |   |   |   |   |   Passenger Fare > 33.688: No {Yes=0, No=2}
    |   |   |   |   |   Passenger Fare ≤ 33.688
    |   |   |   |   |   |   No of Siblings or Spouses on Board > 2.500
    |   |   |   |   |   |   |   No of Parents or Children on Board > 0.500: No {Yes=2, No=11}
    |   |   |   |   |   |   |   No of Parents or Children on Board ≤ 0.500: Yes {Yes=2, No=0}
    |   |   |   |   |   |   No of Siblings or Spouses on Board ≤ 2.500: Yes {Yes=134, No=58}
    Sex = Male
    |   No of Siblings or Spouses on Board > 4.500: No {Yes=0, No=7}
    |   No of Siblings or Spouses on Board ≤ 4.500
    |   |   No of Parents or Children on Board > 2.500: No {Yes=0, No=6}
    |   |   No of Parents or Children on Board ≤ 2.500
    |   |   |   No of Parents or Children on Board > 1.500
    |   |   |   |   Age > 3.500
    |   |   |   |   |   Passenger Fare > 61.719
    |   |   |   |   |   |   Age > 18
    |   |   |   |   |   |   |   Age > 33: Yes {Yes=1, No=1}
    |   |   |   |   |   |   |   Age ≤ 33: No {Yes=0, No=2}
    |   |   |   |   |   |   Age ≤ 18: Yes {Yes=4, No=0}
    |   |   |   |   |   Passenger Fare ≤ 61.719: No {Yes=1, No=10}
    |   |   |   |   Age ≤ 3.500: Yes {Yes=3, No=0}
    |   |   |   No of Parents or Children on Board ≤ 1.500
    |   |   |   |   No of Siblings or Spouses on Board > 3.500: No {Yes=0, No=8}
    |   |   |   |   No of Siblings or Spouses on Board ≤ 3.500
    |   |   |   |   |   No of Parents or Children on Board > 0.500
    |   |   |   |   |   |   Age > 5
    |   |   |   |   |   |   |   Age > 62.500: No {Yes=0, No=2}
    |   |   |   |   |   |   |   Age ≤ 62.500
    |   |   |   |   |   |   |   |   Age > 12: No {Yes=11, No=31}
    |   |   |   |   |   |   |   |   Age ≤ 12: Yes {Yes=3, No=2}
    |   |   |   |   |   |   Age ≤ 5: Yes {Yes=7, No=1}
    |   |   |   |   |   No of Parents or Children on Board ≤ 0.500
    |   |   |   |   |   |   Passenger Fare > 26.144
    |   |   |   |   |   |   |   Passenger Fare > 26.469
    |   |   |   |   |   |   |   |   Passenger Class = First: No {Yes=31, No=64}
    |   |   |   |   |   |   |   |   Passenger Class = Second: No {Yes=0, No=6}
    |   |   |   |   |   |   |   |   Passenger Class = Third: Yes {Yes=4, No=1}
    |   |   |   |   |   |   |   Passenger Fare ≤ 26.469: Yes {Yes=3, No=0}
    |   |   |   |   |   |   Passenger Fare ≤ 26.144: No {Yes=42, No=343}
    </code>
    
      <div class>
    
        <h2 class="mt-5">Scoring</h2>
        <img src="../../../../../../assets/img/ut2_pd2_scoring1.png" alt="Untitled" class="img-fluid mb-4">
        <p>Utilizaremos el método de Naïve Bayes para predecir la clase "Sobrevivió" (sí / no) de cada pasajero y encontrar sus respectivas confianzas.</p>
        <aside class="alert alert-info">
          <strong>💡 Utilizar un modelo para generar predicciones para nuevos puntos de datos se llama *Scoring* (Puntuación).</strong>
        </aside>
        <p>Aplicar Modelo: El operador toma datos sin etiquetar como entrada, aplica el modelo que conectaste al puerto "mod" y produce un conjunto de datos con una etiqueta: las predicciones realizadas por el modelo.</p>
        <p>Tras ejecutar el modelo, encontramos que:</p>
        <p>El resultado es el conjunto de datos original sin etiquetar con una columna para la clase predicha (sí / no) de "Sobrevivió" y dos columnas adicionales para las confianzas de las dos clases diferentes (sí / no) de "Sobrevivió". Por ejemplo, en la primera fila de datos, la predicción es "sí" con un 98,7% de confianza y "no" con un 1,3% de confianza.</p>
        <img src="../../../../../../assets/img/ut2_pd2_scoring2.png" alt="Untitled" class="img-fluid mb-4">
    
        <h2 class="mt-5">Test Splits y Validación</h2>
        <p>El objetivo ahora es separar el conjunto de datos en dos partes: Entrenamiento y Prueba. En este caso, se aplicó el siguiente modelo:</p>
        <img src="../../../../../../assets/img/ut2_pd2_test1.png" alt="Untitled" class="img-fluid mb-4">
        <p>Lo primero que se realiza es utilizar el operador "Split Data", el cual:</p>
        <blockquote>
          <p>Split Data toma un conjunto de ejemplos y lo divide en las particiones que has definido. En este caso, obtendremos dos particiones con un 70% de los datos en una y un 30% de los datos en la otra. Ambos conjuntos aún están etiquetados. La partición del 70% se convertirá en nuestro conjunto de entrenamiento en el que construiremos nuestro modelo. El 30% restante se convertirá en nuestro conjunto de prueba con el que podemos comparar las predicciones de nuestro modelo. Esta relación 70/30 entre entrenamiento y prueba es en realidad un valor popular y efectivo.</p>
        </blockquote>
        <img src="../../../../../../assets/img/ut2_pd2_test2.png" alt="Untitled" class="img-fluid mb-4">
        <p>El primer resultado que ves es el conjunto de prueba con la etiqueta y las predicciones. El segundo resultado es el rendimiento del modelo en el conjunto de prueba. Puedes seleccionar las diferentes medidas de rendimiento ("criterio") en el lado izquierdo de la pantalla. La precisión es del 80,36% y te indica qué tan preciso es el modelo en general. La matriz de confusión muestra los diferentes tipos de errores. Por ejemplo, se han predicho 29 casos como "no" cuando en realidad eran "sí". La precisión es la suma de todos los números en la diagonal dividida por la suma de todos los números. Cuanto mayores sean los números en la diagonal, mejor será el rendimiento de nuestro modelo.</p>
    
        <!-- ... Resto del contenido ... -->
        <!-- Cross Validation -->
        <h2 class="mt-5">Validación Cruzada</h2>
        <p>La Validación Cruzada es una técnica para asegurarse de que cada punto de datos se utilice tanto para el entrenamiento como para la prueba, lo que evita este problema.</p>
        <img src="../../../../../../assets/img/ut2_pd2_crossval1.png" alt="Untitled" class="img-fluid mb-4">
        <p>La validación cruzada divide el conjunto de ejemplos en partes iguales y rota a través de todas las partes, utilizando siempre una para la prueba y todas las demás para entrenar el modelo. Al final, se entrega el promedio de todas las precisiones de prueba como resultado. Esta es una excelente manera de calcular la precisión de los modelos y debería convertirse en tu enfoque estándar de estimación siempre que los esfuerzos computacionales adicionales sean factibles.</p>
        <p>Por defecto, esto divide los datos en 10 partes diferentes, por lo que llamamos a esto una validación cruzada de 10 pliegues.</p>
        <img src="../../../../../../assets/img/ut2_pd2_crossval2.png" alt="Untitled" class="img-fluid mb-4">
        <p>Resultados:</p>
        <img src="../../../../../../assets/img/ut2_pd2_crossval3.png" alt="Untitled" class="img-fluid mb-4">
        <p>+/- representa DEVEST</p>
        <p>La desviación estándar nos da una idea de cuán robusto es el modelo: cuanto menor sea la desviación estándar, menos dependiente será el rendimiento del modelo del conjunto de datos de prueba.</p>
        <!-- Visual Model Comparison -->
        <h2 class="mt-5">Comparación Visual de Modelos</h2>
        <p>La curva de Características de Operación del Receptor (ROC) muestra qué tan bien funciona un modelo de aprendizaje automático binario. Muestra la Tasa de Verdaderos Positivos (TVP) contra la Tasa de Falsos Positivos (TFP) para diferentes umbrales de confianza del modelo (aprende más aquí).</p>
        <blockquote>
          <p>Las curvas ROC son una forma bien conocida de visualizar el rendimiento de los modelos. No te preocupes si no conoces las matemáticas detrás de ellas: simplemente recuerda que las curvas de los mejores modelos se mueven hacia la esquina superior izquierda. Un modelo perfecto produce una línea que sube rectamente (verticalmente) y luego va hacia la derecha (horizontalmente).</p>
        </blockquote>
        <p>Lo que se realizó fue: Se cargó el conjunto de datos del Titanic para entrenamiento al cual se le conectó el operador ROC, este operador nos permite definir un subproceso. En este caso, agregamos tres algoritmos de clasificación diferentes:</p>
        <img src="../../../../../../assets/img/ut2_pd2_per1.png" alt="Untitled" class="img-fluid mb-4">
        <p>Tras ejecutar el modelo, se obtuvo el siguiente resultado:</p>
        <img src="../../../../../../assets/img/ut2_pd2_per2.png" alt="Untitled" class="img-fluid mb-4">
        <p>El gráfico muestra que los tres modelos se curvan hacia la esquina superior izquierda, por lo que sabemos que todos son más efectivos que un simple azar. En este caso, Naïve-Bayes está más alejado de la esquina superior izquierda, lo que significa que funciona peor en este caso.</p>
      </div>
        `
      ],
      tags: [
        "Herramientas",
        "Tratamiento previo de los datos y fundamentos de los algoritmos de ML",
        "Mineria de Datos",
        "CRISP-DM",
        "RapidMiner"
      ],
      publishedDate: new Date("2023/09/05"),
      subHeadings: [
        "Modeling",
        "Scoring",
        "Test Splits y Validación",
        "Validación Cruzada",
        "Comparación Visual de Modelos"
      ],
      interestLink: []
    },
    {
      id: 7,
      title: "Analisis del Dataset wine de UCI utilizando RapidMiner y JupyterLabs",
      category: "2",
      topics: "2",
      parapgraph: [
        `
        <p>La idea principal es dado el dataset wine extraido de UCI (disponible en: https://archive.ics.uci.edu/dataset/109/wine) y dado los conocimientos de operadores de algoritmos y tratamiento previo de los datos realizar:</p>

<ul>
    <li>Analisis de los datos, estadisticas, atributos, existensia de valores faltantes y outliers</li>
    <li>En rapidminer se creara un proceso con dos canales en uno se utilizara el dataset tal cual está, y en el otro se aplicara bloques para normalizar y estandarizar los datos</li>
    <li>Se realizara un split del dataset en test y training</li>
    <li>Se utilizara un modelo sencillo de Naive Bayes para realizar la clasificación , y bloques de evaluación de la performance pertinentes</li>
    <li>En jupyter: Maximos y minimos de cada columna</li>
    <li>Media de cada atributo</li>
    <li>DESVEST de cada atributo</li>
    <li>Normalizacion de los valores</li>
    <li>Realizar un split del dataset</li>
</ul>

<p>El dataset son los resultados de un análisis químico de vinos cultivados en la misma región de Italia pero procedentes de tres cultivares diferentes. El análisis determinó las cantidades de 13 componentes presentes en cada uno de los tres tipos de vino.
Nos encontramos ante un dataset con los siguientes atributos: (Extraído de UCI)</p>
<div class="container mt-5">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Attribute Name</th>
                    <th>Role</th>
                    <th>Type</th>
                    <th>Missing Values</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>class</td>
                    <td>Target</td>
                    <td>Categorical</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>Alcohol</td>
                    <td>Feature</td>
                    <td>Continuous</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>Malicacid</td>
                    <td>Feature</td>
                    <td>Continuous</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>Ash</td>
                    <td>Feature</td>
                    <td>Continuous</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>Alcalinity_of_ash</td>
                    <td>Feature</td>
                    <td>Continuous</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>Magnesium</td>
                    <td>Feature</td>
                    <td>Integer</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>Total_phenols</td>
                    <td>Feature</td>
                    <td>Continuous</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>Flavanoids</td>
                    <td>Feature</td>
                    <td>Continuous</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>Nonflavanoid_phenols</td>
                    <td>Feature</td>
                    <td>Continuous</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>Proanthocyanins</td>
                    <td>Feature</td>
                    <td>Continuous</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>Color_intensity</td>
                    <td>Feature</td>
                    <td>Continuous</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>Hue</td>
                    <td>Feature</td>
                    <td>Continuous</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>0D280_0D315_of_diluted_wines</td>
                    <td>Feature</td>
                    <td>Continuous</td>
                    <td>false</td>
                </tr>
                <tr>
                    <td>Proline</td>
                    <td>Feature</td>
                    <td>Integer</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
<h2>Análisis en RapidMiner</h2>

<p>Tras un analisis con el Statics de RapidMiner encontramos que:</p>
<img src="../../../../../../assets/img/ut2_pd2_1.png" alt="Untitled" class="img-fluid mb-4">
<img src="../../../../../../assets/img/ut2_pd2_2.png" alt="Untitled" class="img-fluid mb-4">


<p>Destacando que no hay valores perdidos en el mismo.</p>
<p>Para los outliers se realizara la siguiente conexion de operadores:</p>
<img src="../../../../../../assets/img/ut2_pd2_3.png" alt="Untitled" class="img-fluid mb-4">
<p>Se encuentrarn aproximadamente 10 datos outliers.</p>
<p>Luego se utiliza un modelo sencillo de Naive Bayes para realizar la clasificación , y bloques de
evaluación de la performance pertinentes (utilizando el dataset de test) para obtener
los resultados.

A grosso modo podemos ver que el modelo consiste en el dataset del titanic, el cual se le realiza un parse en el atributo classe, de integer a polinomial (esto debido a que el wizard de rapidminer comprendio mal el dato), luego se establece el rol de la variable objetivo al mismo.

Luego se puede ver que tenemos dos canales uno con un subproceso el cual realiza una normalizacion para luego realizar un filtrado de datos donde se quiten estos outliers para luego realizar un split de esa data en un 70 training 30 test. En el otro canal no hay subproceso y por ende se hace el split sobre el dataset mismo.

A los datos de training se aplica el algoritmo Naive Bayes, para luego aplicar el modelo sobre los datos de training. Por ultimo se utiliza un operador de performance para comparar los resultados de performance de cada canal.</p>
<img src="../../../../../../assets/img/ut2_pd2_4.png" alt="Untitled" class="img-fluid mb-4">
<h5>Detección y filtrado de outliers: </h5>
<img src="../../../../../../assets/img/ut2_pd2_5.png" alt="Untitled" class="img-fluid mb-4">
<h5>Resultados sin normalizacion:</h5>
<img src="../../../../../../assets/img/ut2_pd2_6.png" alt="Untitled" class="img-fluid mb-4">
<h5>Resultado con normalizacion:</h5>
<img src="../../../../../../assets/img/ut2_pd2_7.png" alt="Untitled" class="img-fluid mb-4">
<p>Se puede observar que con la normalizacion da una precision del 100%, esto puede deberse a que la normalizacion se realizo antes de realizar el split dataset</p>

<h2>Análisis en Jupyter</h2>

<a href="https://github.com/RafaFil/ia-portafolio-docs/blob/main/UT2%20-%20TRATAMIENTO%20PREVIO%20DE%20DATOS/pd/pd3.ipynb">
Link al Jupyter:
</a>

        `
      ],
      publishedDate: new Date("2023/09/05"),
      tags: [
        "Herramientas",
        "Tratamiento previo de los datos y fundamentos de los algoritmos de ML",
        "Mineria de Datos",
        "CRISP-DM",
        "RapidMiner"
      ] ,
      subHeadings: [
        "Análisis en RapidMiner",
        "Análisis en Jupyter"
      ],
      interestLink: []
    },
    {
    id: 8,
    title: "Cálculo de la probabilidad condicional en el titanic",
    category: "",
    topics: "1",
    parapgraph: 
      [
        `
        <p>Tomando como referencia el blog: http://web.stanford.edu/class/archive/cs/cs109/cs109.1166/problem12.html </p>
        <p>Se realizaran los siguientes cálculos de probabilidad condicional: </p>

        <p>1. P(S = true | G = female, C = 1)</p>
        <p>2. P(S = true | G = female, C = 2)</p>
        <p>3. P(S = true | G = female, C = 3)</p>
        <p>4. P(S = true | G = male, C = 1)</p>
        <p>5. P(S = true | G = male, C = 2)</p>
        <p>6. P(S = true | G = male, C = 3)</p>

        <p>Recordando la formula de la probabilidad condicional como: </p>
        <h4 class="card-text mb-3 text-center" style="text-align: center">
        P(A|B) = (P(A ∩ B)) / P(B)
        </h4>

        <p>Tras realizar un script que consumia el dataset titanic, visto en artículos anteriores se llego a los siguientes resultados: </p>

        <table class="table table-bordered">
        <thead>
            <tr>
                <th>Condición</th>
                <th>Probabilidad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>P(Survived=1 | Sex=female, Pclass=1)</td>
                <td>0.9680851063829787</td>
            </tr>
            <tr>
                <td>P(Survived=1 | Sex=female, Pclass=2)</td>
                <td>0.9210526315789473</td>
            </tr>
            <tr>
                <td>P(Survived=1 | Sex=female, Pclass=3)</td>
                <td>0.5</td>
            </tr>
            <tr>
                <td>P(Survived=1 | Sex=male, Pclass=1)</td>
                <td>0.36885245901639346</td>
            </tr>
            <tr>
                <td>P(Survived=1 | Sex=male, Pclass=2)</td>
                <td>0.1574074074074074</td>
            </tr>
            <tr>
                <td>P(Survived=1 | Sex=male, Pclass=3)</td>
                <td>0.13544668587896252</td>
            </tr>
            <tr>
                <td>P(Survived=1 | Age&lt;=10, Pclass=3)</td>
                <td>0.4318181818181818</td>
            </tr>
        </tbody>
      </table>

        <p>Al mismo se le puede hacer mediante una sencilla funcion en python graficar los resultados: </p>
        <code>
            <p>import matplotlib.pyplot as plt</p>


            <p>condiciones = [
              "Sex=female, Pclass=1",
              "Sex=female, Pclass=2",
              "Sex=female, Pclass=3",
              "Sex=male, Pclass=1",
              "Sex=male, Pclass=2",
              "Sex=male, Pclass=3",
              "Age<=10, Pclass=3"
          ]</p>

          <p>probabilidades = [
              0.9680851063829787,
              0.9210526315789473,
              0.5,
              0.36885245901639346,
              0.1574074074074074,
              0.13544668587896252,
              0.4318181818181818
          ]</p>


          <p>plt.figure(figsize=(10, 6))</p>
          <p>plt.barh(condiciones, probabilidades, color='skyblue')</p>
          <p>plt.xlabel('Probabilidad')</p>
          <p>plt.title('Probabilidad de Supervivencia')</p>
          <p>plt.gca().invert_yaxis()  </p>

          <p>plt.show()</p>
        
        
        </code>

        <img class="img-fluid" src="../../../../../../assets/img/ut2_pd4_2_1.png">

        <p>Como conclusiones se puede notar que el factor mas determinante era el sexo, incluso mas importante que la clase (Al final de cuenta el "mujeres y niños primero" no era ficcion de James Cameroon). Se puede ver como las mujeres sin importar la clase
        tienen una mayor probabilidad de supervivencia que cualquier hombre. Asi mismo se puede observar como los niños de tercera clase tambien tenian mayor probabilidad de supervivencia que los hombre de primera clase. A ultimo a destacar es que la probabilidad
        de sobrevivir disminuye con la clase a la que se pertenecia</p>

        <a href="https://github.com/RafaFil/ia-portafolio-docs/blob/main/UT2%20-%20TRATAMIENTO%20PREVIO%20DE%20DATOS/pd/pd4_2.ipynb">
          Link al jupyer notebook
        </a>

        `
      ],
      intrestLinks : [
      ],
      publishedDate: new Date("2023/09/05"),
      tags : [
        Tags.TratamientoPrevioDeLosDatos,
        Tags.Herramientas,
        Tags.Modelo,
        Tags.MineriaDeDatos,
        Tags.AplicacionMatematica,
        Tags.Titanic
      ]
    },
    {
    id: 9,
    title: "Modelo sobre el Titanic",
    category: "",
    topics: "1",
    parapgraph: 
      [
        `
          <a href="https://github.com/RafaFil/ia-portafolio-docs/blob/main/UT2%20-%20TRATAMIENTO%20PREVIO%20DE%20DATOS/pd/pd4.ipynb">
            Link al Jupyter:
          </a>
        `
      ],
      intrestLinks : [
      ],
      publishedDate: new Date("2023/09/05"),
      tags : [
        Tags.TratamientoPrevioDeLosDatos,
        Tags.Herramientas,
        Tags.Modelo,
        Tags.MineriaDeDatos,
        Tags.Titanic

      ],
      destacado: true
    },
    {
      id: 10,
      title: "Gradiente",
      category: "",
      topics: "1",
      parapgraph: 
        [

        ],
        intrestLinks : [
        ],
        publishedDate: new Date("2023/08/20"),
        tags : [
          
        ]
    },
    {
      id: 11,
      title: "Tres algortimos lineales: Regresion lineal, Regresion lógistica, Análisis Discriminante Lineal (LDA)",
      category: "",
      topics: "1",
      parapgraph: 
        [

        ],
        intrestLinks : [
        ],
        publishedDate: new Date("2023/08/20"),
        tags : [
          Tags.AlgoritmosLineales,
          Tags.Resumen,
          Tags.Teoria,
          Tags.Modelo,
          Tags.Algoritmo,
          Tags.RegresionLineal,
          Tags.RegresionLogistica,
          Tags.LDA
        ]
    },
    {
      id: 12,
      title: "Probabilidad de un segundo ataque cárdiaco utilizando Regresión Logistica",
      category: "",
      topics: "1",
      parapgraph: 
        [

        ],
        intrestLinks : [
        ],
        publishedDate: new Date("2023/08/20"),
        tags : [
          Tags.AlgoritmosLineales,
          Tags.Modelo,
          Tags.RegresionLogistica,
          Tags.Clasificacion
        ]
    },
    {
      id: 13,
      title: "Clasificacion de talentos deportivos utilizando LDA",
      category: "",
      topics: "1",
      parapgraph: 
        [

        ],
        intrestLinks : [
        ],
        publishedDate: new Date("2023/08/20"),
        tags : [
          Tags.AlgoritmosLineales,
          Tags.Modelo,
          Tags.LDA,
          Tags.Clasificacion
        ]
    },
    {
      id: 14,
      title: "Algoritmos No Lineales: KNN",
      category: "",
      topics: "2",
      parapgraph: 
        [
          `
          <div class="container">
          <p>
              Todo el conjunto de datos de entrenamiento se "memoriza" y, cuando es necesario clasificar registros de ejemplo sin etiquetar, los atributos de entrada de los nuevos registros sin etiquetar se comparan con todo el conjunto de entrenamiento para encontrar la coincidencia más cercana. La etiqueta de clase del registro de entrenamiento más cercano es la etiqueta de clase prevista para el registro de prueba no visto. Se trata de un método no paramétrico, en el que no se generaliza ni se intenta encontrar la distribución del conjunto de datos (Altman, 1992). Una vez que los registros de entrenamiento están en la memoria, la clasificación del registro de prueba es muy sencilla. Hay que encontrar el registro de entrenamiento más cercano para cada registro de prueba.
          </p>
  
          <p>
              Esta clase de aprendices adopta un enfoque contundente, en el que no se realiza ningún "aprendizaje" a partir de datos de entrenamiento, sino que el conjunto de datos de entrenamiento se utiliza como tabla de consulta para ajustar las variables de entrada y encontrar el resultado. Estos enfoques se denominan aprendices perezosos.
          </p>
  
          <h2 class="mt-5">Cómo funciona:</h2>
  
          <p>
              Cualquier registro de un conjunto de datos puede visualizarse como un punto en un espacio n-dimensional, donde n es el número de atributos. ¿Qué ocurre cuando el punto de datos se encuentra en el límite de dos atributos de clases diferentes? La clasificación puede ser complicada porque en la vecindad hay más de una clase en las proximidades. Necesitamos un algoritmo eficaz para resolver estos casos y medir la proximidad de los puntos de datos con más de dos dimensiones. Una técnica consiste en encontrar el punto de datos de entrenamiento más cercano a un punto de datos de prueba no visto en un espacio multidimensional, y utilizar el valor de la clase objetivo del punto de datos de entrenamiento más cercano como la clase objetivo predicha para el punto de datos de prueba. Esto es similar al funcionamiento del algoritmo k-NN.
          </p>
  
          <p>
              La k del algoritmo k-NN indica el número de registros de entrenamiento cercanos que deben tenerse en cuenta al realizar la predicción de un registro de prueba sin etiquetar. Cuando k = 1, el modelo intenta encontrar el primer registro más cercano y adopta la etiqueta de clase del primer registro de entrenamiento más cercano como valor de la clase objetivo predicha. Dado que la clase del registro objetivo se evalúa por votación, a k se le suele asignar un número impar para un problema de dos clases.
          </p>
  
          <h2 class="mt-5">Medida de proximidad:</h2>
  
          <p>
              La eficacia del algoritmo k-NN depende de la determinación de la semejanza o desemejanza entre un registro de prueba y el registro de entrenamiento memorizado. Una medida de proximidad entre dos registros es la medida de proximidad de sus atributos.
          </p>
  
      <h4 class="mt-5">Distancia</h4>
          <ul>
                      <li>Euclídea</li>
                      <li>Manhattan</li>
                      <li>Chebyshev</li>
                      <li>Minkowski: (Generalizacion de las distancias)</li>
          </ul>
          <p>
          $$
            d = \left( \sum_{i=1}^n |x_i - y_i|^p \right)^{\frac{1}{p}}
          $$
          </p>
          <p>
              Cuando p = 1, la medida de distancia es la distancia Manhattan, cuando p = 2 la medida de distancia es la distancia Euclídea, y cuando p = ∞ la medida de distancia es la distancia Chebyshev.
          </p>
  
          <p>
              <strong>y′ = clase máxima(y1, y2, ⋯ ,yk)</strong>
          </p>
  
          <p><strong>Ponderaciones:</strong> Cuando k es más de uno, se puede argumentar que los vecinos más cercanos deberían tener más peso en el resultado de la clase objetivo predicha que los vecinos más lejanos. Esto se puede conseguir asignando pesos a todos los vecinos, con los pesos aumentando a medida que los vecinos se acercan al punto de datos.</p>
          <p>
          w_i=\frac{e^{-d(x_in_i)}}{\sum_{i=1}^k e^{-d(x_in_i)}}
          </p>
          <p><strong>y = clase máxima(w1 * y1, w2 * y2, ⋯ , wk * yk)</strong></p>
  
  
              <aside class="alert alert-info">
            <strong>💡Nota: Un problema de la aproximación por distancia es que depende de la escala y las unidades de los atributos. Para mitigar el problema causado por las diferentes medidas y unidades, todas las entradas de k-NN suelen normalizarse, donde los valores de los datos se reescalan para ajustarse a un rango determinado. La normalización de todos los atributos proporciona una comparación justa entre ellos.
  </strong>
          </aside>
      
                  <aside class="alert alert-info">
            <strong>💡Nota: La medida de distancia funciona bien para atributos numéricos. Sin embargo, si el atributo es categórico (nominal), la distancia entre dos puntos es 0 o 1. Si los valores de los atributos son los mismos, la distancia es 0. Si los valores de los atributos son iguales, la distancia es 0 y si los valores de los atributos son diferentes, la distancia es 1. Si el atributo es ordinal con más de dos valores, los valores ordinales se pueden convertirse al tipo de datos entero con los valores 0, 1, 2, ..., n - 1 y el atributo convertido puede tratarse como un atributo numérico para el cálculo de la distancia.
  </strong>
          </aside>
      
          <h4 class="mt-5">Similitud de Correlación</h4>
  
          <p>
              La correlación entre dos puntos de datos X e Y es la medida de la relación lineal entre los atributos X e Y.
          </p>
  
          <h4 class="mt-5">Coeficiente de Correspondencia Simple</h4>
  
          <p>
              El coeficiente de correspondencia simple (CMS) se utiliza cuando los conjuntos de datos tienen atributos binarios. Por ejemplo, X es (1,1,0,0,1,1,0) e Y es (1,0,0,1,1,0,0). Podemos medir la similitud entre estos dos puntos de datos basándonos en la aparición simultánea de 0 o 1 con respecto al total de apariciones.
          </p>
  
          <h2 class="mt-5">Conclusión:</h2>
  
          <p>
              El modelo k-NN requiere normalización para evitar cualquier sesgo por cualquier atributo que tenga unidades grandes o pequeñas en la escala. El modelo es bastante robusto cuando falta algún valor de atributo en el registro de prueba. Si falta el valor en el registro de prueba, se ignora todo el atributo en el modelo, y aún así el modelo puede funcionar con una precisión razonable. En el ejemplo de aplicación, si la
  no se conoce la longitud del sépalo de un registro de prueba, el modelo ignora la longitud del sépalo. Cuando falta el valor de un atributo, k-NN se convierte en un modelo tridimensional en lugar de las cuatro dimensiones habituales.
  Como aprendiz perezoso, la relación entre la entrada y la salida no puede explicarse, ya que el modelo no es más que un conjunto memorizado de todos los registros de entrenamiento. No hay generalización ni abstracción de la relación.
          </p>
    </div>
          `
        ],
        intrestLinks : [
        ],
        publishedDate: new Date("2023/09/26"),
        tags : [
          Tags.AlgoritmosNoLineales,
          Tags.Resumen,
          Tags.Teoria
        ],
        subHeadings: [
          "Introduccion",
          "Como funciona",
          "Medida de proximidad",
          "- Distancia",
          "- Similitud de Correlacion",
          "- Coeficiente",
          "Conclusiones",
          "Articulos Relacionados"
        ]
    },
    {
      id: 15,
      title: "Algoritmos No Lineales: Naive Bayes",
      category: "",
      topics: "1",
      parapgraph: 
        [
          `
          <div class="container mt-5">
          <p>Los algoritmos de minería de datos utilizados para tareas de clasificación son muy diversos. El objetivo de estos algoritmos es el mismo: la predicción de una variable objetivo. Sin embargo, el método de predicción se basa en una serie de técnicas multidisciplinares. El algoritmo ingenuo de Bayes tiene sus raíces en la estadística y la teoría de la probabilidad.
  
          <p>Tenemos muchos factores diferentes que afectan al resultado, por lo que a medida que obtenemos más pruebas sobre los factores que afectan al resultado, podemos hacer mejores conjeturas sobre el resultado utilizando la teoría de la probabilidad. El algoritmo bayesiano ingenuo básicamente aprovecha la relación probabilística entre los factores (atributos) y la etiqueta de clase (resultado). El algoritmo hace una suposición fuerte y a veces ingenua de independencia entre los atributos, de ahí su nombre. La suposición de independencia entre atributos puede no ser siempre cierta.
  
          <p>En algunos casos, podemos suponer que los ingresos anuales y la puntuación crediticia son independientes entre sí. Sin embargo, en muchos casos simplemente no lo sabemos. Si uno de los factores de la tasa de morosidad es el valor de la vivienda, entonces tenemos un escenario en el que tanto el factor de los ingresos anuales como el del valor de la vivienda están correlacionados y, por tanto, no son independientes. Los propietarios con ingresos elevados tienden a comprar casas más caras. El supuesto de independencia no se cumple siempre, pero la simplicidad y robustez del algoritmo compensan la limitación introducida por el supuesto de independencia.</p>
          <h2>Cómo funciona:</h2>
          <p>Supongamos que X es la evidencia (o conjunto de factores o atributos) e Y es el resultado (o clase objetivo o etiqueta). Aquí X es un conjunto, no atributos individuales, por lo tanto X = {X1, X2, X3,..., Xn}, donde Xi es un atributo individual, como la calificación crediticia. La probabilidad del resultado P(Y) se denomina probabilidad a priori y puede calcularse a partir del conjunto de datos. La probabilidad a priori muestra la probabilidad de un resultado en un conjunto de datos determinado. Por ejemplo, en el caso de las hipotecas, P(Y) es la tasa de impago de una hipoteca de vivienda, que es del 2%. P(Y|X) se denomina probabilidad condicional, que proporciona la probabilidad de un resultado dada la evidencia cuando conocemos el valor de X. De nuevo, utilizando el ejemplo de la hipoteca, P(Y|X) es la tasa media de impago dado que se conoce el historial crediticio de un individuo.</p> <p>Si el historial crediticio de un individuo es conocido, P(Y|X) es la tasa media de impago.
  
          <p>Si el historial crediticio es excelente, entonces es probable que la probabilidad de impago sea inferior al 2%. P(Y|X) también se denomina probabilidad posterior. Calcular la probabilidad posterior es el objetivo del análisis predictivo mediante el teorema de Bayes. Es la probabilidad de un resultado a medida que aprendemos los valores de los atributos de entrada.</p> 
  
          <p>$$
          P(Y|X) = \frac{P(Y)*P(X|Y)}{P(X)}
          $$</p>
  
          <p>P(X|Y) es otra probabilidad condicional, llamada probabilidad condicional de clase. P(X|Y) es la probabilidad de que un atributo asuma un valor particular dada la etiqueta de clase. Al igual que P(Y), P(X|Y) también se puede calcular a partir del conjunto de datos. Si conocemos el conjunto de entrenamiento de impagos de préstamos, podemos calcular la probabilidad de una calificación crediticia "excelente" dado que el impago es un "sí". Como se indica en el teorema de Bayes, la probabilidad condicional de clase es crucial para calcular la probabilidad posterior. P(X) es básicamente la probabilidad de la evidencia. En el ejemplo de la hipoteca, es simplemente la proporción de individuos con una determinada calificación crediticia.</p> <p>
  
          <p>Para clasificar un nuevo registro, podemos calcular P(Y|X) para cada clase de Y y ver qué probabilidad "gana". La etiqueta de clase Y con el valor más alto de P(Y|X) gana para un determinado valor de atributo X. Dado que P(X) es la misma para cada valor de clase del resultado, no tenemos que calcularla y asumirla como una constante. De forma más general, en un conjunto de ejemplo con n atributos X = {X1, X2, X3 ... Xn}</p> <p>
  
          <p>$$
          P(Y|X) = \frac {P(Y)* \prod_{i=1}^n P(X_i| Y)}{P(x)} 
          $$</p>
  
          <p>Si sabemos calcular la probabilidad condicional de clase P(X|Y) o la prod , entonces es fácil calcular la probabilidad posterior P(Y|X). Como P (X) es constante para cada valor de Y, basta con calcular el numerador de la ecuación para cada valor de clase.</p> <p>
  
          <h3>Un ejemplo de golf:</h3>
          <p>Ver video: https://www.youtube.com/embed/IlVINQDk4o8</p>
  
          <h3>Limitaciones:</h3>
          <p>El modelado bayesiano es bastante robusto en el manejo de valores perdidos. Si el conjunto de ejemplos de prueba no contiene un valor, supongamos que la temperatura no se calcula en el conjunto de ejemplos, el modelo bayesiano simplemente omite la probabilidad condicional de clase correspondiente para los resultados. Los valores que faltan en el conjunto de prueba serían difíciles de manejar en los árboles de decisión y los algoritmos de regresión, sobre todo cuando el atributo que falta se utiliza más arriba en el nodo del árbol de decisión o tiene más peso en la regresión. Aunque el algoritmo Bayes ingenuo es bastante robusto frente a los atributos que faltan, tiene algunas limitaciones. Here are couple of the most significant limitations and methods of mitigation.</p>
  
          <ul>
              <li>Incomplete Training Set</li>
              <li>Continuous Attributes</li>
              <li>Attribute Independence</li>
          </ul>
  
          <p>One of the fundamental assumptions in the naïve Bayesian model is attribute independence. Bayes’ theorem is guaranteed only for independent attributes. In many real-life cases, this is quite a stringent condition to deal with. This is why the technique is called “naïve” Bayesian, because it assumes attributes independence. Before applying the naïve Bayesian algorithm, it makes sense to remove strongly correlated attributes. In the case of all numeric attributes, this can be achieved by computing a weighted correlation matrix. An advanced application of Bayes’ theorem, called a Bayesian belief network, is designed to handle data sets with attribute dependencies.</p>
  
          <h3>Conclusion:</h3>
          <p>The Bayesian algorithm provides a probabilistic framework for a classification problem. It has a simple and sound foundation for modeling the data and is quite robust to outliers and missing values. This algorithm is deployed widely in text mining and document classification where the application has a large set of attributes and attribute values to compute.</p>
  
          <p>La singularidad de la técnica es que aprovecha la nueva información a medida que llega y trata de hacer la mejor predicción teniendo en cuenta las nuevas pruebas. En este sentido, es bastante similar a cómo funciona nuestra mente.</p>
          `
        ],
        intrestLinks : [

        ],
        publishedDate: new Date("2023/09/26"),
        tags : [
          Tags.AlgoritmosNoLineales,
          Tags.Resumen,
          Tags.Teoria
        ],
        subHeadings: [
          "Introduccion",
          "Cómo funciona",
          "Un ejemplo de golf",
          "Limitaciones",
          "Conclusiones",
          "Articulos Relacionados"
        ]
    },
    
  ].reverse()

  constructor() { }
}


// id: 1,
// title: "?",
// category: "",
// topics: "1",
// parapgraph: 
//   [

//   ],
//   intrestLinks : [
//   ],
//   publishedDate: new Date("2023/08/20"),
//   tags : [
//   ]