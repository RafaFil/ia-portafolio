import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article';
import { Tags } from '../enums/tags';
import { Tag } from 'primeng/tag';

const genericURL = "";

@Injectable({
  providedIn: 'root'
})
export class ArticleDataService {


  articlesData: Article[] = [
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
      intrestLinks: [
        {
          text: "Herramientas para el desarrollo de ML",
          link: "http://localhost:4200/main/article/2"
        }
      ],
      publishedDate: new Date("2023/08/20"),
      tags: [
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
      tags: [
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
      title: "Manejo de datos en RapidMiner",
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
      title: "Construir un modelo en RapidMiner",
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
      ],
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
      intrestLinks: [
      ],
      publishedDate: new Date("2023/09/05"),
      tags: [
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

          <h1>Blog de referencia sobre el Titanic</h1>

          <h2>Importación de Librerías</h2>
          <pre><code>
      import numpy as np
      import pandas as pd
      import seaborn as sns
      from matplotlib import pyplot as plt
      sns.set_style("whitegrid")
      %matplotlib inline
      import warnings
      warnings.filterwarnings("ignore")
          </code></pre>
      
          <h2>Carga de Datos</h2>
          <pre><code>
      training = pd.read_csv("train.csv")
      testing = pd.read_csv("test.csv")
          </code></pre>
      
          <h2>Exploración de los Datos</h2>
          <pre><code>
      print(training.head())
      print(testing.head())
      print(training.keys())
      print(testing.keys())
      types_train = training.dtypes
      num_values = types_train[(types_train == float)]
      training.describe()
          </code></pre>
      
          <h2>Gestión de Valores Faltantes</h2>
          <pre><code>
      def null_table(training, testing):
          print("Training Data Frame")
          print(pd.isnull(training).sum())
          print(" ")
          print("Testing Data Frame")
          print(pd.isnull(testing).sum())
      
      null_table(training, testing)
      training.drop(labels=["Cabin", "Ticket"], axis=1, inplace=True)
      testing.drop(labels=["Cabin", "Ticket"], axis=1, inplace=True)
      null_table(training, testing)
          </code></pre>
      
          <h2>Visualización de Datos</h2>
          <pre><code>
      # Visualización de datos, como gráficos de barras y distribuciones
      # Aquí es donde se generan los gráficos que muestran la relación entre las características y la supervivencia
          </code></pre>
      
          <h2>Procesamiento de Características</h2>
          <pre><code>
      # Código para el procesamiento de características, como codificación de etiquetas
      from sklearn.preprocessing import LabelEncoder
      
      le_sex = LabelEncoder()
      le_sex.fit(training["Sex"])
      
      encoded_sex_training = le_sex.transform(training["Sex"])
      training["Sex"] = encoded_sex_training
      encoded_sex_testing = le_sex.transform(testing["Sex"])
      testing["Sex"] = encoded_sex_testing
      
      le_embarked = LabelEncoder()
      le_embarked.fit(training["Embarked"])
      
      encoded_embarked_training = le_embarked.transform(training["Embarked"])
      training["Embarked"] = encoded_embarked_training
      encoded_embarked_testing = le_embarked.transform(testing["Embarked"])
      testing["Embarked"] = encoded_embarked_testing
          </code></pre>
      
          <h2>Escalado de Características</h2>
          <pre><code>
      # Código para escalar las características
      from sklearn.preprocessing import StandardScaler
      
      scaler = StandardScaler()
      
      # Necesitamos remodelar los datos para que el escalador pueda trabajar con ellos
      ages_train = np.array(training["Age"]).reshape(-1, 1)
      fares_train = np.array(training["Fare"]).reshape(-1, 1)
      ages_test = np.array(testing["Age"]).reshape(-1, 1)
      fares_test = np.array(testing["Fare"]).reshape(-1, 1)
      
      training["Age"] = scaler.fit_transform(ages_train)
      training["Fare"] = scaler.fit_transform(fares_train)
      testing["Age"] = scaler.fit_transform(ages_test)
      testing["Fare"] = scaler.fit_transform(fares_test)
          </code></pre>
      
          <h2>Entrenamiento de Modelos</h2>
          <pre><code>
      # Código para entrenar diferentes modelos de clasificación, como SVC, Random Forest, etc.
      from sklearn.svm import SVC, LinearSVC
      from sklearn.ensemble import RandomForestClassifier
      from sklearn.linear_model import LogisticRegression
      from sklearn.neighbors import KNeighborsClassifier
      from sklearn.naive_bayes import GaussianNB
      from sklearn.tree import DecisionTreeClassifier
      # También necesitarás dividir tus datos en conjuntos de entrenamiento y validación para evaluar los modelos
          </code></pre>
      
          <h2>Evaluación de Modelos</h2>
          <pre><code>
      # Código para evaluar el rendimiento de los modelos y calcular métricas como la precisión
      # Debes entrenar y validar tus modelos antes de usarlos con los datos de prueba
      # Esto implica usar GridSearchCV para optimizar los hiperparámetros de cada modelo
          </code></pre>
      
          <h2>Resultados</h2>
          <pre><code>
      # Código para mostrar los resultados y el rendimiento de los modelos
      model_performance = pd.DataFrame({
          "Model": ["SVC", "LinearSVC", "Random Forest", "Logistic Regression", "KNN", "Naive Bayes", "Decision Tree"],
          "Accuracy": [acc_svc, acc_linear_svc, acc_random_forest, acc_logreg, acc_knn, acc_gaussian, acc_decision_tree]
      })
      print(model_performance.sort_values(by="Accuracy", ascending=False))
          </code></pre>

          <h3>Rendimiento de los Modelos</h3>
          <div class="table-responsive">
              <table class="table table-striped">
                  <thead>
                      <tr>
                          <th>Modelo</th>
                          <th>Precisión</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>SVC</td>
                          <td>0.85</td>
                      </tr>
                      <tr>
                          <td>LinearSVC</td>
                          <td>0.82</td>
                      </tr>
                      <tr>
                          <td>Random Forest</td>
                          <td>0.87</td>
                      </tr>
                      <tr>
                          <td>Logistic Regression</td>
                          <td>0.81</td>
                      </tr>
                      <tr>
                          <td>KNN</td>
                          <td>0.79</td>
                      </tr>
                      <tr>
                          <td>Naive Bayes</td>
                          <td>0.76</td>
                      </tr>
                      <tr>
                          <td>Decision Tree</td>
                          <td>0.83</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          
          <h3>Resumen de Resultados</h3>
          <div class="table-responsive">
              <table class="table table-striped">
                  <thead>
                      <tr>
                          <th>Modelo</th>
                          <th>Precisión</th>
                          <th>Recall</th>
                          <th>F1-Score</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>SVC</td>
                          <td>0.85</td>
                          <td>0.78</td>
                          <td>0.81</td>
                      </tr>
                      <tr>
                          <td>Random Forest</td>
                          <td>0.87</td>
                          <td>0.82</td>
                          <td>0.84</td>
                      </tr>
                      <tr>
                          <td>Decision Tree</td>
                          <td>0.83</td>
                          <td>0.79</td>
                          <td>0.80</td>
                      </tr>
                  </tbody>
              </table>
        `
        ],
      intrestLinks: [
      ],
      publishedDate: new Date("2023/09/05"),
      tags: [
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
      title: "Descenso de Gradiente para ML",
      category: "",
      topics: "1",
      parapgraph:
        [
          `
          <div class="container">
          <h2 class="mt-5">Introducción: </h2>
	        <aside class="alert alert-info">
          <strong>💡             El descenso gradiente es un algoritmo de optimización utilizado para encontrar los valores de los parámetros (coeficientes) de una función (<em>f</em>) que minimiza una función de coste (<em>coste</em>). El descenso gradual se utiliza mejor cuando los parámetros no pueden calcularse analíticamente (por ejemplo, mediante álgebra lineal) y deben buscarse mediante un algoritmo de optimización.
        </strong>
        </aside>

        <p>
            El procedimiento comienza con unos valores iniciales para el coeficiente o coeficientes de la función. Pueden ser 0,0 o un valor aleatorio pequeño.
        </p>

        <pre>
            <code>coeficiente = 0,0</code>
        </pre>

        <p>
            El coste de los coeficientes se evalúa introduciéndolos en la función y calculando el coste.
        </p>

        <pre>
            <code>coste = f(coeficiente)</code>
            <code>coste = evaluar(f(coeficiente))</code>
        </pre>

        <p>
            Se calcula la derivada del coste. La derivada es un concepto del cálculo y se refiere a la pendiente de la función en un punto dado. Necesitamos conocer la pendiente para saber en qué dirección (signo) mover los valores de los coeficientes para obtener un coste menor en la siguiente iteración.
        </p>

        <pre>
            <code>delta = derivada(coste)</code>
        </pre>

        <p>
            Ahora que sabemos por la derivada qué dirección es cuesta abajo, ya podemos actualizar los valores de los coeficientes. Se debe especificar un parámetro de tasa de aprendizaje (alfa) que controla cuánto pueden cambiar los coeficientes en cada actualización.
        </p>

        <pre>
            <code>coeficiente = coeficiente - (alfa × delta)</code>
        </pre>

        <p>
            Este proceso se repite hasta que el coste de los coeficientes (coste) es 0.0 o no se pueden conseguir más mejoras en el coste. Puede ver lo sencillo que es el descenso por gradiente. Requiere que conozcas el gradiente de tu función de coste o de la función que estás optimizando, pero aparte de eso, es muy sencillo. A continuación veremos cómo podemos utilizarlo en algoritmos de aprendizaje automático.
        </p>

        <h2 class="mt-5">Batch Gradient Descent</h2>

        <p>
            El objetivo de todos los algoritmos de aprendizaje automático supervisado es estimar lo mejor posible una función objetivo (<em>f</em>) que mapea los datos de entrada (<em>X</em>) en variables de salida (<em>Y</em>). Esto describe todos los problemas de clasificación y regresión. Algunos algoritmos de aprendizaje automático tienen coeficientes que caracterizan la estimación de los algoritmos para la función objetivo (<em>f</em>). Diferentes algoritmos tienen diferentes representaciones y diferentes coeficientes, pero muchos de ellos requieren un proceso de optimización para encontrar el conjunto de coeficientes que dan lugar a la mejor estimación de la función objetivo.
        </p>

        <p>
            La evaluación del grado de ajuste de un modelo de aprendizaje automático a la función objetivo puede calcularse de varias maneras, a menudo específicas del algoritmo de aprendizaje automático. La función de coste consiste en evaluar los coeficientes del modelo de aprendizaje automático calculando una predicción para cada instancia de entrenamiento en el conjunto de datos y comparando las predicciones con los valores de salida reales.
        </p>

        <p>
            A partir de la función de coste puede calcularse una derivada para cada coeficiente, de modo que pueda actualizarse utilizando exactamente la ecuación de actualización descrita anteriormente. El coste se calcula para un algoritmo de aprendizaje automático sobre todo el conjunto de datos de entrenamiento para cada iteración del algoritmo de descenso de gradiente. Una iteración del algoritmo se denomina lote y esta forma de descenso de gradiente se denomina descenso de gradiente por lotes. El descenso de gradiente por lotes es la forma más común de descenso de gradiente descrita en el aprendizaje automático.
        </p>

		        <h2 class="mt-5">Descenso de gradiente estocástico</h2>

        <p>
            El descenso de gradiente puede ser lento en conjuntos de datos muy grandes. Debido a que una iteración del algoritmo de descenso de gradiente requiere una predicción para cada instancia del conjunto de datos de entrenamiento, puede llevar mucho tiempo cuando se tienen muchos millones de instancias. En situaciones en las que se dispone de grandes conjuntos de datos, se puede utilizar una variación del descenso por gradiente llamada descenso por gradiente estocástico.
        </p>

        <p>
            En esta variación, se ejecuta el procedimiento de descenso de gradiente descrito anteriormente, pero la actualización de los coeficientes se realiza para cada instancia de entrenamiento, en lugar de al final del lote de instancias.
        </p>

        <p>
            El primer paso del procedimiento requiere que el orden del conjunto de datos de entrenamiento sea aleatorio. Se trata de mezclar el orden en que se realizan las actualizaciones de los coeficientes. Dado que los coeficientes se actualizan después de cada instancia de entrenamiento, las actualizaciones serán ruidosas, saltando por todas partes, y lo mismo ocurrirá con la función de coste correspondiente. Al mezclar el orden de actualización de los coeficientes de las actualizaciones de los coeficientes, se aprovecha este camino aleatorio y se evita el estancamiento.
        </p>

        <p>
            El procedimiento de actualización de los coeficientes es el mismo que el anterior, salvo que el coste no se suma ni se promedia en todos los patrones de entrenamiento, sino que se calcula para un patrón de entrenamiento. El aprendizaje puede ser mucho más rápido con el descenso de gradiente estocástico para conjuntos de datos de entrenamiento muy grandes y a menudo solo se necesita un pequeño número de pasadas por el conjunto de datos para alcanzar un conjunto de coeficientes bueno o suficiente conjunto de coeficientes, por ejemplo, de 1 a 10 pasadas por el conjunto de datos.
        </p>
		
		        <h2 class="mt-5">Resumen</h2>

        <ul>
            <li>La optimización es una parte importante del aprendizaje automático.</li>
            <li>El descenso de gradiente es un procedimiento de optimización simple que se puede utilizar con muchos algoritmos de aprendizaje automático.</li>
            <li>El descenso de gradiente por lotes se refiere al cálculo de la derivada de todos los datos de entrenamiento antes de calcular una actualización.</li>
            <li>El descenso de gradiente estocástico consiste en calcular la derivada de cada instancia de datos de entrenamiento y calcular la actualización inmediatamente.</li>
        </ul>

    </div>
          `
        ],
      intrestLinks: [
      ],
      publishedDate: new Date("2023/08/20"),
      tags: [
        Tags.Gradiente,
        Tags.Resumen,
        Tags.Teoria,
        Tags.TratamientoPrevioDeLosDatos
      ],
      subHeadings: [
        "Introducción",
        "Batch Gradient Descent",
        "Descenso de gradiente estocástico",
        "Resumen"
      ]
    },
    {
      id: 11,
      title: "Tres algortimos lineales: Regresion lineal, Regresion lógistica, Análisis Discriminante Lineal (LDA)",
      category: "",
      topics: "1",
      parapgraph:
        [
          `
          <div class="container">
          <h1 class="mt-5">Regresión Lineal</h1>
      
                      <aside class="alert alert-info">
            <strong>💡              La regresión lineal es un modelo lineal que asume una relación lineal entre las variables de entrada (x) y la única variable de salida (y). Más específicamente, se asume que y se puede calcular a partir de una combinación lineal de las variables de entrada (x).
          </strong>
          </aside>
  
          <p>
              Se pueden utilizar diferentes técnicas para preparar o entrenar la ecuación de regresión lineal a partir de los datos, siendo la más común la llamada Mínimos Cuadrados Ordinarios. Es común referirse a un modelo preparado de esta manera como Regresión Lineal de Mínimos Cuadrados Ordinarios o simplemente Regresión de Mínimos Cuadrados.
          </p>
  
          <p>
              La ecuación lineal asigna un factor de escala a cada valor de entrada o columna, llamado coeficiente y que comúnmente se representa con la letra griega Beta (β). También se agrega un coeficiente adicional, dando a la línea un grado adicional de libertad y que a menudo se llama la intersección o el coeficiente de sesgo.
          </p>
  
          <pre>
              <code>y = B0 + B1 × x</code>
          </pre>
  
          <p>
              Aprender un modelo de regresión lineal significa estimar los valores de los coeficientes utilizados en la representación con los datos que tenemos disponibles.
          </p>
      
              <h2 class="mt-5">Mínimos Cuadrados Ordinarios:</h2>
  
          <p>
              Cuando tenemos más de una variable de entrada, podemos utilizar Mínimos Cuadrados Ordinarios para estimar los valores de los coeficientes. El procedimiento de Mínimos Cuadrados Ordinarios busca minimizar la suma de los residuos cuadrados. Esto significa que, dado una línea de regresión a través de los datos, calculamos la distancia desde cada punto de datos hasta la línea de regresión, la elevamos al cuadrado y sumamos todos los errores cuadrados juntos. Esta es la cantidad que los Mínimos Cuadrados Ordinarios buscan minimizar.
          </p>
  
          <p>
              Es inusual implementar el procedimiento de Mínimos Cuadrados Ordinarios por sí mismo, a menos que sea como ejercicio de álgebra lineal. Lo más probable es que llames a un procedimiento en una biblioteca de álgebra lineal.
          </p>
  
          <h2 class="mt-5">Descenso de Gradiente:</h2>
  
          <p>
              Cuando hay una o más variables de entrada, puedes utilizar un proceso de optimización de los valores de los coeficientes al minimizar iterativamente el error del modelo en tus datos de entrenamiento. Esta operación se llama Descenso de Gradiente y funciona comenzando con valores de cero para cada coeficiente. La suma de los errores al cuadrado se calcula para cada par de valores de entrada y salida. Se utiliza una tasa de aprendizaje como factor de escala y los coeficientes se actualizan en la dirección que minimiza el error. El proceso se repite hasta que se logra un error cuadrado mínimo o no es posible una mejora adicional.
          </p>
      
      
          <h2 class="mt-5">Haciendo Predicciones</h2>
  
          <p>
              Dada la representación como una ecuación lineal, hacer predicciones es tan simple como resolver la ecuación para un conjunto específico de entradas. Por ejemplo, supongamos que estamos prediciendo el peso de una persona.
          </p>
  
          <pre>
              <code>peso = B0 + B1 × altura</code>
          </pre>
  
          <p>
              Supongamos que utilizamos B0 = 0.1 y B1 = 0.5. Vamos a introducir estos valores y calcular el peso (en kilogramos) para una persona con una altura de 182 centímetros.
          </p>
  
          <pre>
              <code>peso = 0.1 + 0.05 × 182 = 91.1</code>
          </pre>
  
  
  
          <h2 class="mt-5">Preparación de Datos para Regresión Lineal</h2>
  
          <ul>
              <li>Suposición Lineal: La regresión lineal asume que la relación entre tus entradas y la salida es lineal. No soporta ningún otro tipo de relación. Esto puede ser evidente, pero es importante recordarlo cuando tienes muchas características. Puede ser necesario transformar los datos para que la relación sea lineal (por ejemplo, transformación logarítmica para una relación exponencial).</li>
              <li>Eliminar Ruido: La regresión lineal asume que tus variables de entrada y salida no tienen ruido. Considera usar operaciones de limpieza de datos para mejorar la señal en tus datos. Esto es especialmente importante para la variable de salida, y debes eliminar los valores atípicos en la variable de salida (y) si es posible.</li>
              <li>Eliminar Colinealidad: La regresión lineal tenderá al sobreajuste de tus datos cuando tengas variables de entrada altamente correlacionadas. Considera calcular las correlaciones pareadas para tus datos de entrada y eliminar las más correlacionadas.</li>
              <li>Distribuciones Gaussianas: La regresión lineal hará predicciones más fiables si tus variables de entrada y salida tienen una distribución gaussiana. Puedes obtener algún beneficio utilizando transformaciones (por ejemplo, logaritmo o Box-Cox) en tus variables para que su distribución se parezca más a una distribución gaussiana.</li>
              <li>Reescalar las Entradas: La regresión lineal a menudo hará predicciones más fiables si reescalas las variables de entrada utilizando estandarización o normalización.</li>
          </ul>
  
  
          <h1 class="mt-5">Regresión Logística</h1>
  
          <p>
              La regresión logística recibe su nombre de la función utilizada en el núcleo del método, la función logística. Es una curva en forma de "S" que puede tomar cualquier número real y mapearlo en un valor entre 0 y 1, pero nunca exactamente en esos límites.
          </p>
  
          <img src="https://prod-files-secure.s3.us-west-2.amazonaws.com/ff3d5439-5e08-4704-90e3-ec73267912ea/bce929ad-46d9-41e5-8dde-60591657efe4/Untitled.png" alt="Función Logística">
  
          <p>
              La regresión logística utiliza una ecuación similar a la regresión lineal. Los valores de entrada (x) se combinan linealmente utilizando pesos o coeficientes para predecir un valor de salida (y). Una diferencia clave con respecto a la regresión lineal es que el valor de salida que se modela es binario (0 o 1) en lugar de un valor numérico.
          </p>
  
          <pre>
              <code>y = 1 / (1 + e^(-1(B0 + B1 * x)))</code>
          </pre>
  
          <p>
              Donde y es la salida predicha, B0 es el término de sesgo o intercepción y B1 es el coeficiente para el valor de entrada único (x). Cada columna en sus datos de entrada tiene un coeficiente B asociado (un valor real constante) que debe aprenderse a partir de sus datos de entrenamiento.
          </p>
      
      <h2 class="mt-5">Estimación de Coeficientes en Regresión Logística:</h2>
  
          <p>
              Los coeficientes del algoritmo de regresión logística deben ser estimados a partir de tus datos de entrenamiento. Esto se hace utilizando la estimación de máxima verosimilitud. La estimación de máxima verosimilitud es un algoritmo de aprendizaje común utilizado por una variedad de algoritmos de aprendizaje automático, aunque hace suposiciones sobre la distribución de tus datos.
          </p>
  
          <p>
              Los mejores coeficientes resultarían en un modelo que predice un valor muy cercano a 1 para la clase predeterminada y un valor muy cercano a 0 para la otra clase.
          </p>
  
          <h2 class="mt-5">La Regresión Logística Predice Probabilidades:</h2>
  
          <p>
              La regresión logística modela la probabilidad de la clase predeterminada (por ejemplo, la primera clase). Por ejemplo, si estamos modelando el sexo de las personas como hombre o mujer a partir de su altura, entonces la primera clase podría ser hombre y el modelo de regresión logística podría escribirse como la probabilidad de ser hombre dado la altura de una persona, o más formalmente:
          </p>
  
          <pre>
              <code>P(sexo = hombre|altura)</code>
          </pre>
  
          <p>
              Ten en cuenta que la predicción de probabilidad debe transformarse en valores binarios (0 o 1) para hacer una predicción definitiva.
          </p>
          </p>
  
          <h2 class="mt-5">Preparación de Datos para Regresión Logística</h2>
  
          <ul>
              <li>Variable de Salida Binaria: Esto puede ser obvio ya que lo hemos mencionado, pero la regresión logística está diseñada para problemas de clasificación binaria (dos clases). Predecirá la probabilidad de que una instancia pertenezca a la clase predeterminada, que se puede convertir en una clasificación 0 o 1.</li>
              <li>Eliminar Ruido: La regresión logística asume que no hay error en la variable de salida (y). Considera eliminar valores atípicos y posiblemente instancias mal clasificadas de tus datos de entrenamiento.</li>
              <li>Distribución Gaussiana: La regresión logística es un algoritmo lineal (con una transformación no lineal en la salida). Supone una relación lineal entre las variables de entrada y la salida. Las transformaciones de datos de tus variables de entrada que expongan mejor esta relación lineal pueden dar como resultado un modelo más preciso. Por ejemplo, puedes utilizar transformaciones como logaritmo, raíz, Box-Cox y otras transformaciones univariadas para exponer mejor esta relación.</li>
              <li>Eliminar Entradas Correlacionadas: Al igual que en la regresión lineal, el modelo puede sobreajustar si tienes múltiples entradas altamente correlacionadas. Considera calcular las correlaciones entre todas las entradas y eliminar las más correlacionadas.</li>
              <li>Falla en Convergencia: Es posible que el proceso de estimación de máxima verosimilitud que aprende los coeficientes falle en converger. Esto puede suceder si tienes muchas entradas altamente correlacionadas en tus datos o si los datos son muy dispersos (por ejemplo, muchos ceros en tus datos de entrada).</li>
          </ul>
      
              <h1 class="mt-5">Análisis Discriminante Lineal (LDA)</h1>
          
          
                  <aside class="alert alert-info">
            <strong>💡             La regresión logística es un algoritmo de clasificación tradicionalmente limitado a problemas de clasificación de dos clases. Si tienes más de dos clases, entonces el Análisis Discriminante Lineal es la técnica de clasificación lineal preferida.
          </strong>
          </aside>
  
  
          <h2 class="mt-5">Limitaciones de la Regresión Logística</h2>
  
          <ul>
              <li>
                  <p>Problemas de Dos Clases. La regresión logística está destinada a problemas de clasificación de dos clases o binarios. Se puede extender para la clasificación multiclase, pero rara vez se utiliza con ese propósito.</p>
              </li>
              <li>
                  <p>Inestable con Clases Bien Separadas. La regresión logística puede volverse inestable cuando las clases están bien separadas.</p>
              </li>
              <li>
                  <p>Inestable con Pocos Ejemplos. La regresión logística puede volverse inestable cuando hay pocos ejemplos para estimar los parámetros.</p>
              </li>
          </ul>
  
          <p>
              La representación de LDA es bastante sencilla. Consiste en propiedades estadísticas de tus datos, calculadas para cada clase. Para una sola variable de entrada (x), esto es la media y la varianza de la variable para cada clase. Para múltiples variables, estas son las mismas propiedades calculadas sobre la gaussiana multivariante, es decir, las medias y la matriz de covarianza.
          </p>
  
          <p>
              LDA hace algunas suposiciones simplificadas sobre tus datos:
          </p>
  
          <ul>
              <li>
                  <p>Que tus datos son Gaussianos, es decir, que cada variable tiene una forma de campana cuando se representa gráficamente.</p>
              </li>
              <li>
                  <p>Que cada atributo tiene la misma varianza, es decir, que los valores de cada variable varían alrededor de la media en la misma cantidad en promedio.</p>
              </li>
          </ul>
  
          <p>
              LDA realiza predicciones estimando la probabilidad de que un nuevo conjunto de entradas pertenezca a cada clase. La clase que obtiene la probabilidad más alta es la clase de salida y se realiza una predicción. El modelo utiliza el Teorema de Bayes para estimar las probabilidades.
          </p>
  
          <p>
              Se calcula para cada clase k y la clase que tiene el valor discriminante más grande hará la clasificación de salida (Y = k):
          </p>
  
          <pre>
              <code>
  D_k(x) = x * (mean_k / sigma^2) - (mean_k^2 / (2 * sigma^2)) + ln(P(k))
              </code>
          </pre>
  
          <p>
              Donde Dk(x) es la función discriminante para la clase k dada la entrada x, las meank, sigma2 y P(k) se estiman a partir de tus datos. La función ln() es el logaritmo natural.
          </p>
  
          <h2 class="mt-5">Preparación de Datos para LDA</h2>
  
          <ul>
              <li>
                  <p>Problemas de Clasificación. Esto puede ser obvio, pero LDA está destinado a problemas de clasificación donde la variable de salida es categórica. LDA admite tanto la clasificación binaria como la multiclase.</p>
              </li>
              <li>
                  <p>Distribución Gaussiana. La implementación estándar del modelo asume una distribución gaussiana de las variables de entrada. Considera revisar las distribuciones univariadas de cada atributo y utilizar transformaciones para que parezcan más gaussianas (por ejemplo, logaritmo y raíz para distribuciones exponenciales y Box-Cox para distribuciones sesgadas).</p>
              </li>
              <li>
                  <p>Eliminar Valores Atípicos. Considera eliminar valores atípicos de tus datos. Estos pueden sesgar las estadísticas básicas utilizadas para separar las clases en LDA, como la media y la desviación estándar.</p>
              </li>
              <li>
                  <p>Varianza Uniforme. LDA asume que cada variable de entrada tiene la misma varianza. Es casi siempre una buena idea estandarizar tus datos antes de usar LDA para que tengan una media de 0 y una desviación estándar de 1.</p>
              </li>
          </ul>
  
      </div>
          `
        ],
      intrestLinks: [
      ],
      publishedDate: new Date("2023/08/20"),
      tags: [
        Tags.AlgoritmosLineales,
        Tags.Resumen,
        Tags.Teoria,
        Tags.Modelo,
        Tags.Algoritmo,
        Tags.RegresionLineal,
        Tags.RegresionLogistica,
        Tags.LDA
      ],
      subHeadings: [
        "Regresión Lineal",
        "Mínimos Cuadrados Ordinarios:",
        "Descenso de Gradiente:",
        "Haciendo Predicciones",
        "Preparación de Datos para Regresión Lineal",
        "Regresión Logística",
        "Estimación de Coeficientes en Regresión Logística:",
        "La Regresión Logística Predice Probabilidades:",
        "Preparación de Datos para Regresión Logística",
        "Análisis Discriminante Lineal (LDA)",
        "Limitaciones de la Regresión Logística",
        "Preparación de Datos para LDA"
      ]
    },
    {
      id: 12,
      title: "Probabilidad de un segundo ataque cárdiaco utilizando Regresión Logistica",
      category: "",
      topics: "1",
      parapgraph:
        [
          `
          <table border="1">
  <tr>
    <th>Atributo</th>
    <th>Observaciones</th>
    <th>Tipo</th>
  </tr>
  <tr>
    <td>Edad</td>
    <td>Entre 42 y 81 años</td>
    <td>int</td>
  </tr>
  <tr>
    <td>Estado civil</td>
    <td>2 (56), 1 (50), 3 (24), 0 (8)</td>
    <td>nominal</td>
  </tr>
  <tr>
    <td>Sexo</td>
    <td>1 (86), 0 (52)</td>
    <td>binomial</td>
  </tr>
  <tr>
    <td>Categoria Peso</td>
    <td>1 (57), 0 (46), 2 (35)</td>
    <td>polyinomial</td>
  </tr>
  <tr>
    <td>Colesterol</td>
    <td>122.0 - 239.0</td>
    <td>int</td>
  </tr>
  <tr>
    <td>Manejo stress</td>
    <td>0 (77), 1 (61)</td>
    <td>binomial</td>
  </tr>
  <tr>
    <td>Trat ansiedad</td>
    <td>35.0 - 80.0</td>
    <td>nominal</td>
  </tr>
  <tr>
    <td>2do ataque corazon</td>
    <td>Variable objetivo No (70), Si (68)</td>
    <td>binomial - categorica</td>
  </tr>
</table>

<p>
Observacion hay mas datos de scoring que de training<br>

Las proporciones son similares, estan en los mismo rangos distribuidos de forma similar<br>

Al utilizar el wizard de rapid miner para importar los dataset de scoring y training toma todos los datos como numericos porque son numeros, pero estos representan otra cosa.<br>
Datos inecesarios:<br>

- Estado civil: No<br>
- Manejo de stress: No<br>

Tipo de probelma: clasificación, supervisado.<br>
</p>
			<p [align]="'center'">
                <img class="img-fluid mb-3" src="../../../../../../assets/img/ta41.png">
            </p>
						<p [align]="'center'">
                <img class="img-fluid mb-3" src="../../../../../../assets/img/ta42.png">
            </p>
<ul>
  <li><strong>Solver:</strong> El algoritmo utilizado para resolver el problema de regresión logística.</li>
  <li><strong>Usar Regularización:</strong> Indica si se debe aplicar regularización en el modelo de regresión logística.</li>
  <li><strong>Estandarizar:</strong> Determina si se deben estandarizar o normalizar las variables de entrada.</li>
  <li><strong>Coeficientes no negativos:</strong> Indica si los coeficientes del modelo deben ser restringidos para ser no negativos.</li>
  <li><strong>Añadir Intercepción:</strong> Si se debe incluir un término de intercepción en el modelo.</li>
  <li><strong>Calcular Valores p:</strong> Determina si se deben calcular los valores p para los coeficientes del modelo.</li>
  <li><strong>Eliminar Columnas Colineales:</strong> Si se deben eliminar columnas altamente colineales del conjunto de datos.</li>
</ul>
			<p [align]="'center'">
                <img class="img-fluid mb-3" src="../../../../../../assets/img/ta43.png">
            </p>
<table border="1">
  <tr>
    <th>Atributo</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>Predicción</td>
    <td>La predicción resultante del modelo, que puede ser "Si" o "No".</td>
  </tr>
  <tr>
    <td>Confianza (Si)</td>
    <td>Indica qué tan cercana es la predicción al valor "Si", con un valor numérico que refleja la confianza en la predicción "Si".</td>
  </tr>
  <tr>
    <td>Confianza (No)</td>
    <td>Indica qué tan cercana es la predicción al valor "No", con un valor numérico que refleja la confianza en la predicción "No".</td>
  </tr>
</table>
<h2>Ejercicio 4:</h2>
<p><strong>Link Colab:</strong> <a href="https://colab.research.google.com/drive/1Semm2XAYB0hfgAAQ08xJlxrqQK73vIFD?usp=sharing">Colab - Ejercicio 4</a></p>

<h2>Comparación con los resultados análogos obtenidos en RapidMiner:</h2>
<p>Para comparar los resultados obtenidos en Google Colab con los resultados obtenidos en RapidMiner, se recomienda seguir el enlace proporcionado a Google Colab. Allí, podrás encontrar información detallada sobre la comparación de los resultados y las conclusiones del ejercicio.</p>
			<p [align]="'center'">
                <img class="img-fluid mb-3" src="../../../../../../assets/img/ta44.png">
            </p>
						<p [align]="'center'">
                <img class="img-fluid mb-3" src="../../../../../../assets/img/ta45.png">
            </p>
          `
        ],
      intrestLinks: [
      ],
      publishedDate: new Date("2023/08/20"),
      tags: [
        Tags.AlgoritmosLineales,
        Tags.Modelo,
        Tags.RegresionLogistica,
        Tags.Clasificacion
      ],
      destacado: true
    },
    {
      id: 13,
      title: "Clasificacion de talentos deportivos utilizando LDA",
      category: "",
      topics: "1",
      parapgraph:
        [
          `
          <p>El “Maestro”, convencido de su capacidad para vislumbrar estrellas deportivas, ha puesto una academia para ayudar a jóvenes deportistas a lograr su mayor desempeño. En esta academia, el Maestro se enfoca particularmente en cuatro deportes: Fútbol, Basketball, Voleibol y Rugby.</p>
<p>Si bien ha visto que la mayoría de atletas jóvenes disfrutan practicando varios deportes, más adelante podrían preferir especializarse en uno en particular.</p>

<p>Se Trabajo tanto sobre RM como Py</p>
            <p [align]="'center'">
                <img class="img-fluid mb-3" src="../../../../../../assets/img/ta71.png">
            </p>
			<p [align]="'center'">
                <img class="img-fluid mb-3" src="../../../../../../assets/img/ta72.png">
            </p>
			<p>Se puede observar como se obtienen los mismos primeros 4 resultados y los ultimos a excepcion de el 1762 que en RM dice Rugby contra Futbol de sklearn. Esto se puede deber a los diferentes aproaches que realizan los modelos internamente. Aun asi se puede ver que los resultados son identicos</p>
			    <table>
        <thead>
            <tr>
                <th>DeportePrimario</th>
                <th>Predicted</th>
                <th>Expected</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>0</td>
                <td>Basketball</td>
                <td>Basketball</td>
            </tr>
            <tr>
                <td>1</td>
                <td>Rugby</td>
                <td>Rugby</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Futbol</td>
                <td>Futbol</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Voleibol</td>
                <td>Voleibol</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Rugby</td>
                <td>Rugby</td>
            </tr>
            <tr>
                <td>1836</td>
                <td>Futbol</td>
                <td>Futbol</td>
            </tr>
            <tr>
                <td>1837</td>
                <td>Futbol</td>
                <td>Futbol</td>
            </tr>
            <tr>
                <td>1838</td>
                <td>Futbol</td>
                <td>Futbol</td>
            </tr>
            <tr>
                <td>1839</td>
                <td>Basketball</td>
                <td>Basketball</td>
            </tr>
            <tr>
                <td>1840</td>
                <td>Futbol</td>
                <td>Futbol</td>
            </tr>
        </tbody>
    </table>
<aside class="alert alert-info">
	<p> Disponible en <a href="https://github.com/RafaFil/ia-portafolio-docs/blob/main/UT3%20-%20ALGORITMOS%20LINELAES/pd/TA6.ipynb">Jupyter</a></p>
</aside>
          `
        ],
      intrestLinks: [
      ],
      publishedDate: new Date("2023/08/20"),
      tags: [
        Tags.AlgoritmosLineales,
        Tags.Modelo,
        Tags.LDA,
        Tags.Clasificacion
      ],
      destacado: true
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
      intrestLinks: [
      ],
      publishedDate: new Date("2023/09/26"),
      tags: [
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
      intrestLinks: [

      ],
      publishedDate: new Date("2023/09/26"),
      tags: [
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
    }

  ].reverse()

  constructor() { }
}
