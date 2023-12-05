import { Injectable } from '@angular/core';
import { StudyCase } from '../interfaces/studyCase';

@Injectable({
  providedIn: 'root'
})
export class StudyCaseDataService {

  studyCase: StudyCase[] = [
    {
      title: "Caso: Probabilidad de un ataque cardiaco",
      cut: "cardio",
      shortDescripton: "En este caso se estudiara a partir de un dataset de historias clinicas la probabilidad de que un paciente padezca un ataque cardíaco",
      html: "<div class=\"container\"><h1 [align]=\"'center'\" class=\"mt-3\">Prediccion de padecer una enfermedad cardíaca</h1><div class=\"row mt-5\"><div class=\"col-md-8 order-md-1\"><p>Objetivo: El objetivo de este caso de estudio es lograr predecir la probabilidad de que una persona posea una enfermedad cardiaca.</p><p>El estudio es realizado en el marco del proceso CRISP-DM:</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/1.jpg\"></p><h2>Comprension del negocio</h2><p>Se entiende como necesidad médica la posibilidad de generar algoritmos predictivos que dado ciertos valores de una persona detecten una enfermedad. En este caso una enfermedad cardiaca.</p><h2>Comprensión de la data:</h2><p>Se obtienen 4 dataset recuperados de: <a href=\"https://archive.ics.uci.edu/dataset/45/heart+disease\">https://archive.ics.uci.edu/dataset/45/heart+disease</a></p><ol><li>Cleveland Clinic Foundation (cleveland.data)</li><li>Hungarian Institute of Cardiology, Budapest</li><li>V.A. Medical Center, Long Beach, CA</li><li>University Hospital, Zurich, Switzerland</li></ol><p>De acuerdo con el archivo de presentación, se extrae que todos los dataset poseen 76 atributos por fila (todos con los mismos campos), pero que en los estudios realizados solo son 14. Es más, incluso destaca que solo el de Cleveland fue utilizado como entrenamiento para diferentes aplicaciones de ML. Ningún data set posee los 76 atributos.</p><h5>Los 14 más usados: </h5><table class=\"table table-striped table-bordered\"><thead><tr><th>Name</th><th>Role</th><th>Type</th><th>Demographic</th><th>Description</th><th>Units</th><th>Missing Values</th></tr></thead><tbody><tr><td>age</td><td>Feature</td><td>Integer</td><td>Age</td><td>Age</td><td>years</td><td>no</td></tr><tr><td>sex</td><td>Feature</td><td>Categorical</td><td>Sex</td><td></td><td></td><td>no</td></tr><tr><td>cp</td><td>Feature</td><td>Categorical</td><td></td><td></td><td></td><td>no</td></tr><tr><td>trestbps</td><td>Feature</td><td>Integer</td><td></td><td>Resting Blood Pressure (on admission to the hospital)</td><td>mm Hg</td><td>no</td></tr><tr><td>chol</td><td>Feature</td><td>Integer</td><td></td><td>Serum Cholestoral</td><td>mg/dl</td><td>no</td></tr><tr><td>fbs</td><td>Feature</td><td>Categorical</td><td></td><td>Fasting Blood Sugar > 120 mg/dl</td><td></td><td>no</td></tr><tr><td>restecg</td><td>Feature</td><td>Categorical</td><td></td><td></td><td></td><td>no</td></tr><tr><td>thalach</td><td>Feature</td><td>Integer</td><td></td><td>Maximum Heart Rate Achieved</td><td></td><td>no</td></tr><tr><td>exang</td><td>Feature</td><td>Categorical</td><td></td><td>Exercise Induced Angina</td><td></td><td>no</td></tr><tr><td>oldpeak</td><td>Feature</td><td>Integer</td><td></td><td>ST Depression Induced by Exercise Relative to Rest</td><td></td><td>no</td></tr><tr><td>slope</td><td>Feature</td><td>Categorical</td><td></td><td></td><td></td><td>no</td></tr><tr><td>ca</td><td>Feature</td><td>Integer</td><td></td><td>Number of Major Vessels (0-3) Colored by Flourosopy</td><td></td><td>yes</td></tr><tr><td>thal</td><td>Feature</td><td>Categorical</td><td></td><td></td><td></td><td>yes</td></tr><tr><td>num</td><td>Target</td><td>Integer</td><td></td><td>Diagnosis of Heart Disease</td><td></td><td>no</td></tr></tbody></table><table class=\"table table-striped table-bordered\"><thead><tr><th>Features</th><th>Description</th></tr></thead><tbody><tr><td>Age</td><td>Age in year</td></tr><tr><td>Sex</td><td>Gender</td></tr><tr><td>CP</td><td>Chest pain type</td></tr><tr><td>Trestbps</td><td>Resting blood pressure</td></tr><tr><td>Chol</td><td>Serum cholesterol</td></tr><tr><td>Fbs</td><td>Fasting blood sugar</td></tr><tr><td>Resteg</td><td>Resting electrographic results</td></tr><tr><td>Talach</td><td>Maximum heart rate achieved</td></tr><tr><td>Exang</td><td>Exercise induce angina</td></tr><tr><td>Oldpeak</td><td>ST depression induced by exercise relative to rest</td></tr><tr><td>Slope</td><td>The slope of the peak exercise ST segment</td></tr><tr><td>CA</td><td>Number of major vessels coloured by fluoroscopy</td></tr><tr><td>Thal</td><td>Thallium heart scan</td></tr><tr><td>Goal</td><td>Diagnosis of heart disease</td></tr></tbody></table><p>Podemos observar que de esos 76 hay muchos los cuales o no tienen descripción, o son datos identificativos (como son nombre, id, etc) los cuales no generan un aporte significativo al modelo, y deben ser retirados para ahorrar tiempo de ejecución.</p><p>Para este caso se utilizarán los 14 atributos. Los cuales están disponibles en el repositorio de UCL como la versión procesada de los datos.</p><p>Se realizará de la siguiente forma: se verá cada dataset por separado para luego realizarlos sobre los 4 dataset unidos.</p><h3>Estadística</h3><h4>Cleveland</h4><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/2.jpg\"></p><p>Como se puede observar se destaca la casi nula presencia de valores faltantes, solo 4 en la columna ca. Los cuales representan un 0.1% del dataset, por lo tanto, se eliminarán.</p><p>A su vez podemos ver que los atributos tienen una relativa distribución gausiana</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/3.jpg\"></p><p>- Obs1: La clase num (variable objetivo), está bastante equilibrada con 164 con NO padecieron una enfermedad contraria a los 139 que SI padecieron.<br>- Obs2: Usando un boxplot se ve que hay relativamente pocos outliers, salvo chol el cual tiene valores bastantes grandes</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/4.jpg\"></p><p>- Obs3: Se puede ver que en thal tenemos dos valores con “?” lo que significa que no son valores verdaderos, también se eliminara pues representa menos del 0.1%</p><h4>Switzerland</h4><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/9.jpg\"></p><p>- Obs1: faltan muchos datos, una columna no tiene registros (ca) lo cual afecta los datos, mas tras ver que en si es una variable que puede afectar y es condicionante.<br>- Obs2: muchos valores faltantes en los demás con “?”<br>- Conclusión: Se descarta el dataset para entrenar modelos, puesto que el tratamiento no puede ser el mejor, aun así, no se descarta el hecho de usarlo para evaluar performance del modelo final.<br></p><h4>Hungary</h4><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/10.jpg\"></p><p>Obs1: Podemos ver que varios de hungary tienen valores faltantes en -9 lo cual hace que el dataset no sea útil para entrenar modelos.</p><h4>Va</h4><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/11.jpg\"></p><p>- Obs1: Igual que en los casos anteriores, este dataset tambien tiene muchos valores faltantes, por lo cual su uso podría perjudicar el modelo.</p><aside class=\"alert alert-info\"><p>En resumen: Se puede observar que tanto Hungry, Switzerland y VA no son buenos para realizar un modelo debido a la gran cantidad de valores faltantes.</p></aside><h3>Visualizacion</h3><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/5.jpg\"></p><p>Se puede observar como en general parece haber mas mujeres sin enfermedad que hombres, y que a su su vez no depende tanto de la edad. Lo cual en parte puede explicarse debido a que predominan mas hombres en el dataset que mujeres.</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/6.jpg\"></p><p>Otra forma de visualización, verde representa a las mujeres.</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/7.jpg\"></p><p>Realizando un scatterplot entre oldpeak y chol podemos notar que a medida que oldpeak aumenta más propensos son a tener una enfermedad cardiaca.</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/8.jpg\"></p><p>Se ve que a mayor Ca aumenta considerablemente</p><h2>Preparacion de los datos</h2><p>Se van a aplicar los cambios definidos en la parte anterior.</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/12.jpg\"></p><p>Primero se quitan tanto outliers, como valores faltantes y luego se realiza un multiply para tener dos canales posibles: uno donde tenemos las cinco clases y otro donde tenemos solo dos.</p><h2>Modelado</h2><p>Se va a trabajar tanto sobre Cleveland, debido a que los otros 3 tienen muchos valores faltantes como para poder trabajar sobre ellos.</p><p>En esta sección se utilizarán 4 algoritmos de clasificación:</p><ul><li>Regresión logística</li><li>KNN</li><li>Naive Bayes</li></ul><p>En cada modelo se utilizará la misma estructura, primero un tratamiento previo de datos en donde se trabajará los datos para así poder aplicarlos al algoritmo correspondiente. Luego se multiplicará el dataset para así tener cuatro canales diferentes uno para un cross validation común con los 14 atributos y los otros tres con feature selection. Se realizará tanto en Python como en RM</p><p>Se probará como una clasificación binomial, así como una clasificación de 4 clases. Para comparar, aunque se entiende que el problema puede agruparse la variable de objetivo en dos (como se ve en preparación de los datos).</p><p>La estructura de RM para cada algoritmo es la siguiente:</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/13.jpg\"></p><p>Donde proceso de datos es el subproceso que realiza el siguiente tratamiento previo:</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/14.jpg\"></p><p>Luego el subproceso tanto de non binary como de binary se componen de:</p><ul><li>Cross validation</li><li>Foward selection</li><li>Backward Elimination</li><li>Evolutionary</li></ul><p>Los resultados se medirán en performance.</p><p>Dentro de cada proceso de modelo se vera de esta manera:</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/14.jpg\"></p><p>Bloque de cross validation:</p><ol><li>Bloque del algoritmo del modelo: configuración por defecto</li><li>Bloque de Aplicar modelo</li><li>Bloque de performance por defecto</li></ol><p>Foward y backward selection ambos tienen la configuración por defecto.</p><p>Optimize selection (Evolutionary) tiene 30 como número máximo de generaciones y 20 de tamaño de población.</p><p>Paso previo: Puesto que en un caso vamos a trabajar con una clasificación binaria se puede realizar una evaluación ROC. Para eso realizamos lo siguiente:</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/16.jpg\"></p><p>Tenemos dos canales uno con datos sin normalizar y el otro con datos normalizados. En cada ROC se comparará KNN, RL y NB.</p><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/17.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/18.jpg\"></p></div><p>- Obs1: Knn no esta correcto tras la normalización<br>- Obs2: En ambos casos la regresión logística parece ser el modelo mas efectivo.</p><h3>Regresion Logistica</h3><aside class=\"alert alert-info\"><strong>Consideración importante: La regresión logística es un algoritmo de clasificación binaria, lo que significa que solo podemos tener dos clases para clasificar. Esto con nuestro dataset, no es posible debido a que hay cinco clases posibles para una fila. La decisión que se toma es realizar un Discretize y agrupar en dos clases diferentes. Por un lado, las NO = 0 y las SI = 1,2,3,4. Esto no afecta el modelo, puesto que es una agrupación de padecer una enfermedad o no padecer.</strong></aside><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/19.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/20.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/21.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/22.jpg\"></p></div><h3>KNN</h3><h4>Binario</h4><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/23.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/24.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/25.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/26.jpg\"></p></div><h4>No Binario</h4><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/27.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/28.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/29.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/30.jpg\"></p></div><h3>NB</h3><h4>Binario</h4><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/27.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/28.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/29.jpg\"></p></div><div class\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/30.jpg\"></p></div><h4>No Binario</h4><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/31.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/32.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/33.jpg\"></p></div><div class=\"col-md-6 offset-md-3\"><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardiac/34.jpg\"></p></div><h3>Resultados en Python</h3><aside class=\"alert alert-info\"><p>En Python se realizó el siguiente código disponible en: <a href=\"https://github.com/RafaFil/ia-portafolio-docs/blob/main/CASOS%20DE%20ESTUDIO/Enfermedad%20Cardiaca/CE_Enfermedad_Cardiaca.ipynb\">https://github.com/RafaFil/ia-portafolio-docs/blob/main/CASOS%20DE%20ESTUDIO/Enfermedad%20Cardiaca/CE_Enfermedad_Cardiaca.ipynb</a></p></aside><h4>Clasificacion binaria</h4><table class=\"table table-striped\"><thead><tr><th>Model</th><th>Accuracy</th></tr></thead><tbody><tr><td>LDA</td><td>0.875000</td></tr><tr><td>Logistic Regression</td><td>0.863636</td></tr><tr><td>Gaussian Naive Bayes</td><td>0.852273</td></tr><tr><td>Bernoulli NB</td><td>0.818182</td></tr><tr><td>K Nearest Neighbors</td><td>0.613636</td></tr></tbody></table><h4>Clasificacion no binaria</h4><table class=\"table table-striped\"><thead><tr><th>Model</th><th>Accuracy</th></tr></thead><tbody><tr><td>LDA</td><td>0.590909</td></tr><tr><td>Gaussian Naive Bayes</td><td>0.579545</td></tr><tr><td>K Nearest Neighbors</td><td>0.534091</td></tr><tr><td>Multinomial NB</td><td>0.454545</td></tr></tbody></table><h2>Evaluacion</h2><p>Knn para 4 clases se descarta puesto que el algoritmo no fue preciso para la clase num = 4, se estima que este error es debido a la falta de valores 4 </p><p>Se llego a los siguientes resultados (comparando entre py y rm), considerando aquellos mayores a 60.</p><table class=\"table table-striped\"><thead><tr><th>Model</th><th>Accuracy</th></tr></thead><tbody><tr><td>LDA</td><td>87.5</td></tr><tr><td>LR</td><td>86.3</td></tr><tr><td>LR</td><td>85.7</td></tr><tr><td>LR</td><td>85.33</td></tr><tr><td>NB</td><td>85.2</td></tr><tr><td>LR</td><td>84.99</td></tr><tr><td>LR</td><td>82.94</td></tr><tr><td>LR</td><td>82.63</td></tr><tr><td>NB</td><td>82.62</td></tr><tr><td>NB</td><td>81.8</td></tr><tr><td>NB</td><td>81.63</td></tr><tr><td>KNN</td><td>81</td></tr><tr><td>KNN</td><td>61</td></tr></tbody></table><h2>Conclusión</h2><p>RapidMiner: La regresión logística fue la que obtuvo mejores resultados. KNN para 4 clases no es optimo puesto que al disminuir las clases y no tener una distribución uniforme de la misma.</p><p>Métodos de feature selection: aumentan el rendimiento y el mas efectivo en la gran mayoría de casos fue Foward selection. Aunque en los que Evolutionary no tenia baja performance el modelo mejoraba contra el mencionado anteriormente.</p><p>Python: LDA fue el mejor, pero la regresión logística dio un resultado muy similar, el cual considerando el margen de error podríamos decir que ambos tienen un rendimiento similar</p><p>Se puede decir que el mejor algoritmo para enfrentar este caso es la regresión logística si lo vemos como un problema de clasificación binaria, sino en todo caso LDA tiene una eficiencia de casi 60% lo cual considerando que la probabilidad es 20% si se escoge aleatoriamente una clase es para tener en cuenta. Mismo con naive bayes.</p><p>Los resultados coinciden con UCL, en donde se trataba a RL como el mejor algoritmo para este problema.</p><p>Se puede observar que se dio que el rendimiento del modelo fue mejor en la clasificación binaria que en la clasificación con varias clases, esto principalmente se puede deber a que la distribución de los datos con varias clases no era la más uniforme, teníamos muchísimos 0 menos 1 y así descendiendo hasta tener unos pocos 4. </p><p>Como mejora continua se podría partir de la base de la clasificación binaria y a partir de la respuesta de este modelo evaluarlo con uno de 5 clases.</p><h2>Deploy</h2><p class=\"mb-5\">Se utilizaría como modelo: LDA, RL, NB y se tomaría como una clasificación binaria.</p></div><div class=\"col-md order-md-2\" [align]=\"'end'\"><a href=\"../../../../../../assets/pdf/CE_ENFERMEDAD_CARDIACA.pdf\" download=\"CE_ENFERMEDAD_CARDIACA.pdf\"><div class=\"w-100 pbu\"><p-button class=\"w-100 pbu\">Descargar pdf</p-button></div></a><div class=\"me-5 mt-5\"><h5>Indice: </h5><h6>Comprension del negocio</h6><h6>Comprension de los datos</h6><h6>Preparacion de los datos</h6><h6>Modelado</h6><h6>Evaluacion</h6><h6>Deploy</h6></div></div></div></div></div>",
      image: "../../../../../../assets/img/ut2_pd2_4.png"
    },
    {
      title: "Caso: Deteccion de una enfermedad renal",
      cut: "ckd",
      shortDescripton: "Se desea analizar los datos de ingresos y salidas del Refugio de Animales de la ciudad de Austin, para comprender las tendencias de adopción de animales, incluyendo qué atributos de estos animales resultan en una probabilidad de adopción mayor.",
      html: "<ia-navbar [sectionTitle]=\"'Diagnostico temprano de enfermedad cronica de riñon'\"></ia-navbar><div class=\"container\"><h1 [align]=\"'center'\" class=\"mt-3\">Diagnostico temprano de enfermedad cronica de riñon</h1><div class=\"row mt-5\"><div class=\"col-md-8 order-md-1\"><p>Objetivo: El objetivo de este caso de estudio es lograr predecir la probabilidad de que una persona posea una enfermedad cardiaca.</p><p>El estudio es realizado en el marco del proceso CRISP-DM:</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/1.jpg\"></p><h2>Comprension del negocio</h2><h3>Enfermedad Renal Crónica (ERC)</h3><p>La enfermedad renal crónica es una afección médica caracterizada por una disminución progresiva de la función renal a lo largo del tiempo. Puede estar en etapas tempranas, como la insuficiencia renal leve, o en etapas avanzadas, como la insuficiencia renal crónica. La ERC puede ser causada por diversas enfermedades subyacentes, como la diabetes, la hipertensión y enfermedades autoinmunitarias.</p><h3>Estadísticas Globales</h3><p>Las estadísticas sobre la ERC varían según la región y el país. Sin embargo, en todo el mundo, la enfermedad renal crónica es un problema de salud pública creciente. Según la Organización Mundial de la Salud (OMS), se estima que alrededor del 10% de la población mundial tiene ERC, y millones de personas mueren cada año debido a complicaciones relacionadas con esta enfermedad.</p><h3>Impacto Económico y Social</h3><p>La ERC tiene un impacto económico significativo en los sistemas de atención médica y en la calidad de vida de las personas. Los costos asociados con el tratamiento de la ERC, que puede incluir diálisis o trasplante renal, son sustanciales. Además, la enfermedad puede llevar a una disminución en la productividad laboral y una mayor carga para las familias.</p><h3>Otros Problemas Relacionados</h3><p>La ERC también está relacionada con una serie de otros problemas de salud, como enfermedades cardiovasculares, anemia, desequilibrios electrolíticos y trastornos óseos y minerales. La gestión de la ERC implica no solo tratar la disfunción renal, sino también abordar estas complicaciones.</p><aside class=\"alert alert-info\"><strong>Se trata de un problema de clasificación supervisado, esto se debe a que nosotros tenemos datos con un dato objetivo (class).</strong></aside><h2>Comprension del negocio</h2><p>Es un dataset que se compone de 25 atributos</p><table class=\"table table-striped\"><thead><tr><th>Número</th><th>Variable</th><th>Descripción</th><th>Categorías</th></tr></thead><tbody><tr><td>1</td><td>Age</td><td>Edad en años</td><td>Numerical (Edad en años)</td></tr><tr><td>2</td><td>Blood Pressure</td><td>Presión arterial en mm/Hg</td><td>Numerical (Presión arterial en mm/Hg)</td></tr><tr><td>3</td><td>Specific Gravity</td><td>Gravedad específica</td><td>Nominal (1.005, 1.010, 1.015, 1.020, 1.025)</td></tr><tr><td>4</td><td>Albumin</td><td>Albúmina</td><td>Nominal (0, 1, 2, 3, 4, 5)</td></tr><tr><td>5</td><td>Sugar</td><td>Azúcar en orina</td><td>Nominal (0, 1, 2, 3, 4, 5)</td></tr><tr><td>6</td><td>Red Blood Cells</td><td>Glóbulos rojos en sangre</td><td>Nominal (Normal, Anormal)</td></tr><tr><td>7</td><td>Pus Cell</td><td>Células de pus</td><td>Nominal (Normal, Anormal)</td></tr><tr><td>8</td><td>Pus Cell Clumps</td><td>Coágulos de células de pus</td><td>Nominal (Presente, No Presente)</td></tr><tr><td>9</td><td>Bacteria</td><td>Bacterias en orina</td><td>Nominal (Presente, No Presente)</td></tr><tr><td>10</td><td>Blood Glucose Random</td><td>Glucosa en sangre aleatoria</td><td>Numerical (bgr en mg/dl)</td></tr><tr><td>11</td><td>Blood Urea</td><td>Urea en sangre</td><td>Numerical (bu en mg/dl)</td></tr><tr><td>12</td><td>Serum Creatinine</td><td>Creatinina en suero</td><td>Numerical (sc en mg/dl)</td></tr><tr><td>13</td><td>Sodium</td><td>Sodio en suero</td><td>Numerical (sod en mEq/L)</td></tr><tr><td>14</td><td>Potassium</td><td>Potasio en suero</td><td>Numerical (pot en mEq/L)</td></tr><tr><td>15</td><td>Hemoglobin</td><td>Hemoglobina</td><td>Numerical (hemo en gms)</td></tr><tr><td>16</td><td>Packed Cell Volume</td><td>Volumen de células empaquetadas</td><td>Numerical (Valor en %)</td></tr><tr><td>17</td><td>White Blood Cell Count</td><td>Recuento de glóbulos blancos</td><td>Numerical (wc en células/cumm)</td></tr><tr><td>18</td><td>Red Blood Cell Count</td><td>Recuento de glóbulos rojos</td><td>Numerical (rc en millones/cmm)</td></tr><tr><td>19</td><td>Hypertension</td><td>Hipertensión</td><td>Nominal (Sí, No)</td></tr><tr><td>20</td><td>Diabetes Mellitus</td><td>Diabetes Mellitus</td><td>Nominal (Sí, No)</td></tr><tr><td>21</td><td>Coronary Artery Disease</td><td>Enfermedad de las arterias coronarias</td><td>Nominal (Sí, No)</td></tr><tr><td>22</td><td>Appetite</td><td>Apetito</td><td>Nominal (Bueno, Pobre)</td></tr><tr><td>23</td><td>Pedal Edema</td><td>Edema en los pies</td><td>Nominal (Sí, No)</td></tr><tr><td>24</td><td>Anemia</td><td>Anemia</td><td>Nominal (Sí, No)</td></tr><tr><td>25</td><td>Class</td><td>Clase</td><td>Nominal (CKD, No CKD)</td></tr></tbody></table><p>- Muchos datos tienen valores con “?” lo cual significa que es un valor faltante. Esto se pueden descartar con el fin de tener un dataset más limpio. Esto no va a afectar los datos puesto que son pocos valores en general</p><h2>Procesamiento de los datos</h2><p>Valores faltantes:</p><table class=\"table table-striped\"><thead><tr><th>Número</th><th>Variable</th><th>Descripción</th><th>Categorías</th></tr></thead><tbody><tr><td>1</td><td>Age</td><td>Edad en años</td><td>Numerical (Edad en años)</td></tr><tr><td>2</td><td>Blood Pressure</td><td>Presión arterial en mm/Hg</td><td>Numerical (Presión arterial en mm/Hg)</td></tr><tr><td>3</td><td>Specific Gravity</td><td>Gravedad específica</td><td>Nominal (1.005, 1.010, 1.015, 1.020, 1.025)</td></tr><tr><td>4</td><td>Albumin</td><td>Albúmina</td><td>Nominal (0, 1, 2, 3, 4, 5)</td></tr><tr><td>5</td><td>Sugar</td><td>Azúcar en orina</td><td>Nominal (0, 1, 2, 3, 4, 5)</td></tr><tr><td>6</td><td>Red Blood Cells</td><td>Glóbulos rojos en sangre</td><td>Nominal (Normal, Anormal)</td></tr><tr><td>7</td><td>Pus Cell</td><td>Células de pus</td><td>Nominal (Normal, Anormal)</td></tr><tr><td>8</td><td>Pus Cell Clumps</td><td>Coágulos de células de pus</td><td>Nominal (Presente, No Presente)</td></tr><tr><td>9</td><td>Bacteria</td><td>Bacterias en orina</td><td>Nominal (Presente, No Presente)</td></tr><tr><td>10</td><td>Blood Glucose Random</td><td>Glucosa en sangre aleatoria</td><td>Numerical (bgr en mg/dl)</td></tr><tr><td>11</td><td>Blood Urea</td><td>Urea en sangre</td><td>Numerical (bu en mg/dl)</td></tr><tr><td>12</td><td>Serum Creatinine</td><td>Creatinina en suero</td><td>Numerical (sc en mg/dl)</td></tr><tr><td>13</td><td>Sodium</td><td>Sodio en suero</td><td>Numerical (sod en mEq/L)</td></tr><tr><td>14</td><td>Potassium</td><td>Potasio en suero</td><td>Numerical (pot en mEq/L)</td></tr><tr><td>15</td><td>Hemoglobin</td><td>Hemoglobina</td><td>Numerical (hemo en gms)</td></tr><tr><td>16</td><td>Packed Cell Volume</td><td>Volumen de células empaquetadas</td><td>Numerical (Valor en %)</td></tr><tr><td>17</td><td>White Blood Cell Count</td><td>Recuento de glóbulos blancos</td><td>Numerical (wc en células/cumm)</td></tr><tr><td>18</td><td>Red Blood Cell Count</td><td>Recuento de glóbulos rojos</td><td>Numerical (rc en millones/cmm)</td></tr><tr><td>19</<tr><td>20</td><td>Diabetes Mellitus</td><td>Diabetes Mellitus</td><td>Nominal (Sí, No)</td></tr><tr><td>21</td><td>Coronary Artery Disease</td><td>Enfermedad de las arterias coronarias</td><td>Nominal (Sí, No)</td></tr><tr><td>22</td><td>Appetite</td><td>Apetito</td><td>Nominal (Bueno, Pobre)</td></tr><tr><td>23</td><td>Pedal Edema</td><td>Edema en los pies</td><td>Nominal (Sí, No)</td></tr><tr><td>24</td><td>Anemia</td><td>Anemia</td><td>Nominal (Sí, No)</td></tr><tr><td>25</td><td>Class</td><td>Clase</td><td>Nominal (CKD, No CKD)</td></tr></tbody></table><p>- Muchos datos tienen valores con '?' lo cual significa que es un valor faltante. Esto se pueden descartar con el fin de tener un dataset más limpio. Esto no va a afectar los datos puesto que son pocos valores en general</p><h2>Procesamiento de los datos</h2><p>Valores faltantes:</p><table class='table table-striped'><thead><tr><th>Número</th><th>Variable</th><th>Descripción</th><th>Categorías</th></tr></thead><tbody><tr><td>1</td><td>Age</td><td>Edad en años</td><td>Numerical (Edad en años)</td></tr><tr><td>2</td><td>Blood Pressure</td><td>Presión arterial en mm/Hg</td><td>Numerical (Presión arterial en mm/Hg)</td></tr><tr><td>3</td><td>Specific Gravity</td><td>Gravedad específica</td><td>Nominal (1.005, 1.010, 1.015, 1.020, 1.025)</td></tr><tr><td>4</td><td>Albumin</td><td>Albúmina</td><td>Nominal (0, 1, 2, 3, 4, 5)</td></tr><tr><td>5</td><td>Sugar</td><td>Azúcar en orina</td><td>Nominal (0, 1, 2, 3, 4, 5)</td></tr><tr><td>6</td><td>Red Blood Cells</td><td>Glóbulos rojos en sangre</td><td>Nominal (Normal, Anormal)</td></tr><tr><td>7</td><td>Pus Cell</td><td>Células de pus</td><td>Nominal (Normal, Anormal)</td></tr></tbody></table><tr><td>8</td><td>Pus Cell Clumps</td><td>Coágulos de células de pus</td><td>Nominal (Presente, No Presente)</td></tr><tr><td>9</td><td>Bacteria</td><td>Bacterias en orina</td><td>Nominal (Presente, No Presente)</td></tr><tr><td>10</td><td>Blood Glucose Random</td><td>Glucosa en sangre aleatoria</td><td>Numerical (bgr en mg/dl)</td></tr><tr><td>11</td><td>Blood Urea</td><td>Urea en sangre</td><td>Numerical (bu en mg/dl)</td></tr><tr><td>12</td><td>Serum Creatinine</td><td>Creatinina en suero</td><td>Numerical (sc en mg/dl)</td></tr><tr><td>13</td><td>Sodium</td><td>Sodio en suero</td><td>Numerical (sod en mEq/L)</td></tr><tr><td>14</td><td>Potassium</td><td>Potasio en suero</td><td>Numerical (pot en mEq/L)</td></tr><tr><td>15</td><td>Hemoglobin</td><td>Hemoglobina</td><td>Numerical (hemo en gms)</td></tr><tr><td>16</td><td>Packed Cell Volume</td><td>Volumen de células empaquetadas</td><td>Numerical (Valor en %)</td></tr><tr><td>17</td><td>White Blood Cell Count</td><td>Recuento de glóbulos blancos</td><td>Numerical (wc en células/cumm)</td></tr><tr><td>18</td><td>Red Blood Cell Count</td><td>Recuento de glóbulos rojos</td><td>Numerical (rc en millones/cmm)</td></tr><tr><td>19</td><td>Hypertension</td><td>Hipertensión</td><td>Nominal (Sí, No)</td></tr><tr><td>20</td><td>Diabetes Mellitus</td><td>Diabetes Mellitus</td><td>Nominal (Sí, No)</td></tr><tr><td>21</td><td>Coronary Artery Disease</td><td>Enfermedad de las arterias coronarias</td><td>Nominal (Sí, No)</td></tr><tr><td>22</td><td>Appetite</td><td>Apetito</td><td>Nominal (Bueno, Pobre)</td></tr><tr><td>23</td><td>Pedal Edema</td><td>Edema en los pies</td><td>Nominal (Sí, No)</td></tr><tr><td>24</td><td>Anemia</td><td>Anemia</td><td>Nominal (Sí, No)</td></tr><tr><td>25</td><td>Class</td><td>Clase</td><td>Nominal (CKD, No CKD)</td></tr></tbody></table><p>Se puede ver que el dataset tiene unos cuantos valores faltantes.</p><p>Class: tiene 13 valores faltantes pero debido a la letra del info (250 valores ckd) podemos entenderlos como ckd. Por lo tanto Class tiene 0 valores faltantes.</p><p>Dos datos para considerar son rbcc y wbcc los cuales tienen más de ¼ de los atributos. Debido a que estos son muy importantes para los problemas renales los missing van a ser remplazados por la media del atributo.</p><p>Como consideración para reducir la dimensionalidad de los atributos se va a quitar anemia, rbc pues rbcc abarca ambas. Mismo con hipertensión y presión de sangre. Diabetes y glucosa. Gravedad no se encuentra en la bibliografía.</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CKD/Imagen1.png\"></p><p>Tras el primer filtrado se realiza una matriz de correlación y se obtienen los siguientes resultados:</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CKD/Imagen2.png\"></p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CKD/Imagen3.png\"></p><p>Bu sc –pck – pck rc – rc – sod pot</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CKD/Imagen4.png\"></p><p>Como están altamente relacionadas se va a quitar hemo sc y sod</p><h3>Visualizacion</h3><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CKD/Imagen11.png\"></p><h2>Tratamiento previo de los datos</h2><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CKD/Imagen12.png\"></p><ol><li>Se seleccionan los atributos que se desean quitar</li><li>Se setea el rol de label</li><li>Se remplazan los valores \"wc\" y \"rbc\" por el promedio</li><li>Se reemplaza el \"no\" de class por \"notckd\"</li><li>Se filtran los \"?\"</li></ol><h2>Modelado</h2><p>Curvas ROCs:</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CKD/Imagen13.png\"></p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CKD/Imagen5.png\"></p><h3>LDA</h3><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CKD/Imagen10.png\"></p><p>El subproceso se realiza para que todos los datos sean numericos</p><h2>Evaluacion</h2><h3>LR</h3><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CKD/Imagen6.png\"></p><h3>KNN</h3><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CKD/Imagen7.png\"></p><h3>NB</h3><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CKD/Imagen8.png\"></p><h3>LDA</h3><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CKD/Imagen9.png\"></p><table class=\"table table-striped mb-5\"><thead><tr><th>Modelo</th><th>Rendimiento</th></tr></thead><tbody><tr><td>LR</td><td>96.25 +- 3.39</td></tr><tr><td>NB</td><td>95.25 +- 4.16</td></tr><tr><td>LDA</td><td>95.25 +- 4.16</td></tr><tr><td>KNN</td><td>74.50 +- 7.25</td></tr></tbody></table></div><div class=\"col-md order-md-2\" [align]=\"'end'\"><a href=\"../../../../../../assets/pdf/CE_CKD.pdf\" download=\"CE_ckd.pdf\"><div class=\"w-100 pbu\"><p-button class=\"w-100 pbu\">Descargar pdf</p-button></div></a><div class=\"me-5 mt-5\"><h5>Indice: </h5><h6>Comprension del negocio</h6><h6>Comprension de los datos</h6><h6>Preparacion de los datos</h6><h6>Modelado</h6><h6>Evaluacion</h6><h6>Deploy</h6></div></div></div>",
      image: "../../../../../../assets/img/CKD/bck.jpg"
    },
    {
      title: "Caso: Adopcion de Animales",
      cut: "animals",
      shortDescripton: "Se desea analizar los datos de ingresos y salidas del Refugio de Animales de la ciudad de Austin, para comprender las tendencias de adopción de animales, incluyendo qué atributos de estos animales resultan en una probabilidad de adopción mayor.",
      html: "<div class=\"container\"><h1 [align]=\"'center'\" class=\"mt-3\">Caso estudio: Adopciones en un refugio de Austin</h1><div class=\"row mt-5\"><div class=\"col-md-8 order-md-1\"><p>Objetivo: El objetivo de este caso de estudio es lograr predecir la probabilidad de que una persona posea una enfermedad cardiaca.</p><p>El estudio es realizado en el marco del proceso CRISP-DM:</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/CE_cardaic/1.jpg\"></p><h2>Comprension del negocio</h2><p>Se desea analizar los datos de ingresos y salidas del Refugio de Animales de la ciudad de Austin, para comprender las tendencias de adopción de animales, incluyendo qué atributos de estos animales resultan en una probabilidad de adopción mayor. El objetivo final es predecir si un cierto animal será adoptado o no, basado en las características que el Refugio de Animales de Austin puede identificar en el momento del ingreso. Este problema es importante porque aproximadamente 6.5 millones de animales ingresan a los refugios anualmente. Más aún, cada año 1.5 millones de animales de los refugios son sacrificados.</p><aside class=\"alert alert-info\"><strong>Se trata de un problema de clasificación supervisado, esto se debe a que nosotros tenemos datos con un dato objetivo (class).</strong></aside><h2>Comprension del negocio</h2><p>Tenemos dos datasets uno de datos de los animales cuando entran y otro cuando salen. Los datos son los siguientes:</p><h2>Procesamiento de los datos</h2><h2>Dataset \"Intakes\"</h2><table border=\"1\"><tr><th>Atributo</th><th>Tipo de datos original de la base de datos</th></tr><tr><td>animal_id</td><td>Texto</td></tr><tr><td>name</td><td>Texto</td></tr><tr><td>datetime</td><td>datetime</td></tr><tr><td>monthyear</td><td>datetime</td></tr><tr><td>found_location</td><td>Texto</td></tr><tr><td>intake_type</td><td>Texto</td></tr><tr><td>intake_condition</td><td>Texto</td></tr><tr><td>animal_type</td><td>Texto</td></tr><tr><td>sex_upon_intake</td><td>Texto</td></tr><tr><td>age_upon_intake</td><td>Texto</td></tr><tr><td>breed</td><td>Texto</td></tr><tr><td>color</td><td>Texto</td></tr></table><h2>Dataset \"Outcomes\"</h2><table border=\"1\"><tr><th>Atributo</th><th>Tipo de datos original de la base de datos</th></tr><tr><td>animal_id</td><td>Texto</td></tr><tr><td>name</td><td>Texto</td></tr></table><td>datetime</td><td>datetime</td></tr><tr><td>monthyear</td><td>datetime</td></tr><tr><td>date_of_birth</td><td>Texto</td></tr><tr><td>outcome_type</td><td>Texto</td></tr><tr><td>outcome_subtype</td><td>Texto</td></tr><tr><td>animal_type</td><td>Texto</td></tr><tr><td>sex_upon_outcome</td><td>Texto</td></tr><tr><td>age_upon_outcome</td><td>Texto</td></tr><tr><td>breed</td><td>Texto</td></tr><tr><td>color</td><td>Texto</td></tr></table><h2>Tratamiento previo de los datos</h2><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/Animals/Imagen1.png\"></p><p>Se adoptan principalmente perros. Lo cual es normal puesto que el refugio recibe principalmente perros.</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/Animals/Imagen2.png\"></p><p>Total, Perros Adoptados 2823/9509 <br>Total, Gatos Adoptados 904/2461 <br>Lo cual nos da un animal de preferencia son los gatos.</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/Animals/Imagen3.png\"></p><p>Podemos observar también que la principal edad en la que se adopta es al año con 641 adopciones.</p><h2>Preparacion de los datos</h2><p>Las decisiones que se tomaran para trabajar sobre los mismos son:</p><ol><li><strong>Convertir sex a sex y castrated por separado:</strong> Se dividirá la columna \"sex\" en dos columnas separadas, una para el sexo y otra para indicar si el animal está castrado.</li><li><strong>Definir atributo adoptado como label:</strong> El atributo \"adopted\" se definirá como la etiqueta que se quiere predecir en el modelo.</li><li><strong>Sacar monthyear que es la mismo que date:</strong> La columna \"monthyear\" que es idéntica a la columna \"date\" se eliminará para evitar redundancia.</li><li><strong>Eliminar atributos innecesarios:</strong> Se eliminarán las columnas que no aportan al modelo y no se necesitan para el análisis.</li><li><strong>Asignar role id a animal_id:</strong> La columna \"animal_id\" se asignará como el identificador único (ID) del animal.</li><li><strong>Eliminar duplicados:</strong> Se eliminarán las filas duplicadas en el dataset.</li><li><strong>Generar clase Adopted:</strong> Se creará una nueva columna llamada \"Adopted\" donde se marcarán las filas donde [outcome_type] sea igual a \"Adoption\" y [outcome_subtype] no sea igual a \"Foster\".</li></ol><p>Todo esto se hace con turboprep sin ningún operador en específico. Las columnas se remueven en transform remove. Las seleccionadas fueron principalmente las que no aportaban al modelo </p><h2>Modelado</h2><p>Comparacion ROCs</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/Animals/Imagen4.png\"></p><ol><li><strong>Regresión Logística (RL):</strong> Se utilizará el modelo de Regresión Logística para clasificar los datos.</li><li><strong>K-Nearest Neighbors (KNN):</strong> El modelo K-Nearest Neighbors se empleará para la clasificación basada en vecinos más cercanos.</li><li><strong>Naive Bayes (NB):</strong> Se aplicará el modelo Naive Bayes para la clasificación de datos.</li></ol><p>El modelo para utilizar es el siguiente:</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/Animals/Imagen5.png\"></p><p>Cada cross validation posee un modelo.También se realizará feature selection para cada modelo.</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/Animals/Imagen7.png\"></p><h2>Evaluacion</h2><p>RL</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/Animals/Imagen8.png\"></p><p>FS</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/Animals/Imagen8.png\"></p><p>NB</p><p [align]=\"'center'\"><img class=\"img-fluid mb-3\" src=\"../../../../../../assets/img/Animals/Imagen9.png\"></p><p>FS</p><p [align]='center'><img class='img-fluid mb-3' src='../../../../../../assets/img/Animals/Imagen10.png'></p><p>KNN</p><p [align]='center'><img class='img-fluid mb-3' src='../../../../../../assets/img/Animals/Imagen11.png'></p><p>FS</p><p [align]='center'><img class='img-fluid mb-3' src='../../../../../../assets/img/Animals/Imagen13.png'></p><p>Algo a destacar es lo siguiente:</p><p [align]='center'><img class='img-fluid mb-3' src='../../../../../../assets/img/Animals/Imagen14.png'></p><p>Se puede ver que a pesar de realizar el mismo foward selection, cada vez tomo atributos diferentes, aunque con algunas coincidencias. Esto se debe a que el algoritmo es avido, es decir que todo depende de donde tenga el punto de origen.</p></div><div class='col-md order-md-2' [align]='end'><a href='../../../../../../assets/pdf/CE_Animales.pdf' download='CE_Animales.pdf'><div class='w-100 pbu'><p-button class='w-100 pbu'>Descargar pdf</p-button></div></a><div class='me-5 mt-5'><h5>Indice: </h5><h6>Comprension del negocio</h6><h6>Comprension de los datos</h6><h6>Preparacion de los datos</h6><h6>Modelado</h6><h6>Evaluacion</h6><h6>Deploy</h6></div></div></div></div>",
      image: "../../../../../../assets/img/Animals/Imagen5.png"
    },
    {
      title: "Caso: Predecir Cáncer de Pulmón",
      cut: "lung",
      shortDescripton: "Este caso plantea un problema particular, al contarse con muy poca información respecto el contexto y significado de los datos, el amplio numero de atributos y los desbalanceos en los datos de cada atributo. Este ejercicio de clasificación presenta el problema de identificar entre 3 tipos de Cancer de Pulmón a partir de un conjunto reducido de datos pero con muchos atributos.",
      html:
        `
          <section id="content" class="body container">

   <div class="row">
        <div class="eleven columns">


            <header>
              <h1 class="entry-title">
                Investigación Caso: Cáncer de Pulmón</h1>
           
            </header>
            <footer class="post-info">
              <abbr class="published" title="2023-10-11T00:00:00-03:00">
                mié. 11 Octubre 2023
              </abbr>
              <address class="vcard author">By 
                <a class="url fn" href="/author/salonso1602.html"> salonso1602</a>
              </address>
            </footer><!-- /.post-info -->
            <div class="entry-content">
              <h3 id="de-uci-dataset-lung-cancer">de UCI Dataset: <a href="https:/archive.ics.uci.edu/dataset/62/lung+cancer">Lung Cancer</a></h3>
<h2 id="introduccion">Introducción</h2>
<p>Este caso plantea un problema particular, al contarse con muy poca información respecto el contexto y significado de los datos, el amplio numero de atributos y los desbalanceos en los datos de cada atributo. Este ejercicio de clasificación presenta el problema de identificar entre 3 tipos de Cancer de Pulmón a partir de un conjunto reducido de datos pero con muchos atributos.  </p>
<h2 id="resumen-y-estadisticas-del-set">Resumen y Estadísticas del Set</h2>
<table>
  <tr>
    <th><strong>Característica</strong>  </th>
    <th><strong>Descripción</strong>  </th>
  </tr>
  <tr>
    <td>Cant. de Ejemplos  </td>
    <td>32  </td>
  </tr>
  <tr>
    <td>Cant. de Atributos  </td>
    <td>56  </td>
  </tr>
  <tr>
    <td>Tipo Ejercicio  </td>
    <td>Clasificación  </td>
  </tr>
  <tr>
    <td>Variable Objetivo  </td>
    <td>att1: Tipo categórico (1 al 3)  </td>
  </tr>
  <tr>
    <td>Tipos Atributos  </td>
    <td>Todos los atributos son categóricos, con valores entre 0 y 3  </td>
  </tr>
</table>

<p><strong>Estadísticas</strong><br>
<img alt="Pelican" src="../../../../../../assets/img/lungCancer/image.png"><img alt="Pelican" src="../../../../../../assets/img/lungCancer/image-1.png"><img alt="Pelican" src="../../../../../../assets/img/lungCancer/image-2.png"><img alt="Pelican" src="../../../../../../assets/img/lungCancer/image-3.png"><img alt="Pelican" src="../../../../../../assets/img/lungCancer/image-5.png"><img alt="Pelican" src="../../../../../../assets/img/lungCancer/image-6.png"><img alt="Pelican" src="../../../../../../assets/img/lungCancer/image-7.png"><img alt="Pelican" src="../../../../../../assets/img/lungCancer/image-8.png"><img alt="Pelican" src="../../../../../../assets/img/lungCancer/image-9.png"><img alt="Pelican" src="../../../../../../assets/img/lungCancer/image-10.png">  </p>
<h2 id="revision-de-datos">Revisión de Datos</h2>
<p>En esta sección elaboraríamos en el significado, implicancias y características de los datos en el contexto del problema, pero para este caso no contamos con la información específica para estos datos.<br>
Resaltamos únicamente que todos los datos son categóricos y aunque tengan valores numéricos no podemos asumir naturaleza ordinal de estos. Similarmente en varios atributos se resaltan cantidades dispares de las diferentes categorías de cada uno.  </p>
<h2 id="procesamiento-de-datos">Procesamiento de Datos</h2>
<p>El procesamiento de datos es complejo ya que no tenemos el contexto para discernir de manera racional que atributos aportan o no a la predicción que buscamos hacer, por lo que debemos soportarnos por heurísticas y estadísticas de los datos de por sí. Para el presente caso evaluaremos las diferencias de performance dadas las heurísticas más usadas: Forward Selection, Backward Selection y Evolutionary Selection.<br>
Por otro lado, hay 5 ejemplos con valores faltantes. Normalmente este es un numero insignificante pero dado el reducido numero de ejemplos disponibles decidimos tolerarlos y no eliminarlos. En algunos casos los algoritmos de Feature Selection omiten los atributos que contienen estos valores faltantes (att5 y att39), por lo que el impacto no es muy grave.  </p>
<h2 id="eleccion-de-modelo">Elección de Modelo</h2>
<p>Para el presente ejercicio nos planteamos 2 modelos como pretendientes: Naive Bayes y K-NN.<br>
Ambos son buenos algoritmos de clasificación. Elegimos Naive Bayes ya que se especializa en atributos categóricos que en este caso son todos nuestros atributos. K-NN nos permite obtener un modelo performante para el conjunto de datos pequeños, aunque con este arriesgamos introducir la asunción de que nuestras variables categóricas son ordinales, debido al parseo necesario y el calculo de distancia entre puntos. En otros casos la cantidad de atributos sería detrimental al modelo, pero para este caso donde reducimos los atributos a los significativos no es tan fuerte la sobre-dimensionalidad.  </p>
<h2 id="definicion-de-proceso-de-entrenamiento">Definición de proceso de entrenamiento</h2>
<p>Para el entrenamiento utilizaremos Cross-validation de 10 folds, ya que es una bastante estándar de medir el performance de nuestros modelos y debido al poco pre-procesamiento es fácil de implementar.<br>
Por el lado de la Feature Selection, compararemos las heurísticas con los siguientes parámetros:<br>
- Forward Selection: n° máximo de atributos: 30, Criterio de Detención: Sin Mejora.<br>
- Backward Selection: n° máximo de eliminaciones: 10, Criterio de Detención: Sin Mejora.<br>
- Evolutionary Selection: Población: 9, n° máx de generaciones: 30, n° mínimo de atributos: 1.  </p>
<h2 id="procesos">Procesos</h2>
<p><img alt="Pelican" src="../../../../../../assets/img/lungCancer/image-11.png"><br>
Subproceso "naive Feat Select":<br>
<img alt="Pelican" src="../../../../../../assets/img/lungCancer/image-12.png"><br>
Subproceso "Evolutionary":<br>
<img alt="Pelican" src="../../../../../../assets/img/lungCancer/image-13.png"><br>
Subproceso "Cross Validation":<br>
<img alt="Pelican" src="../../../../../../assets/img/lungCancer/image-14.png">  </p>
<p><em>Es análogo para las otras heurísticas y modelo, solo se sustituye el bloque correspondiente</em>  </p>
<h2 id="performance">Performance</h2>
<h3 id="naive-bayes">Naive Bayes</h3>
<h4 id="forward-selection">Forward Selection</h4>
<p>Atributos Seleccionados:<br>
att20, att21, att24, att54 <br>
Total: 4  </p>
<p>PerformanceVector:
- accuracy: 81.67% +/- 25.40% (micro average: 81.25%)  </p>
<p>ConfusionMatrix:  </p>
<table>
  <tr>
    <th>  </th>
    <th>True: 1  </th>
    <th>True: 2  </th>
    <th>True: 3  </th>
  </tr>
  <tr>
    <td>1:  </td>
    <td>8  </td>
    <td>2  </td>
    <td>0  </td>
  </tr>
  <tr>
    <td>2:  </td>
    <td>1  </td>
    <td>10  </td>
    <td>2  </td>
  </tr>
  <tr>
    <td>3:  </td>
    <td>0  </td>
    <td>1  </td>
    <td>8  </td>
  </tr>
</table>

<h4 id="backward-selection">Backward Selection</h4>
<p>Atributos Seleccionados:<br>
att2, att3, att5, att7, att8, att9, att11, att12, att13, att14, att15, att17, att18, att19, att20, att21, att22, att24, att25, att26, att27, att28, att29, att30, att31, att32, att33, att34, att36, att37, att38, att39, att40, att41, att42, att43, att44, att45, att46, att47, att48, att49, att51, att52, att53, att54, att55, att57 <br>
Total: 48   </p>
<p>PerformanceVector:<br>
accuracy: 75.83% +/- 28.45% (micro average: 75.00%)  </p>
<p>ConfusionMatrix:  </p>
<table>
  <tr>
    <th>True:  </th>
    <th>1  </th>
    <th>2  </th>
    <th>3  </th>
  </tr>
  <tr>
    <td>1:  </td>
    <td>8  </td>
    <td>2  </td>
    <td>0  </td>
  </tr>
  <tr>
    <td>2:  </td>
    <td>1  </td>
    <td>9  </td>
    <td>3  </td>
  </tr>
  <tr>
    <td>3:  </td>
    <td>0  </td>
    <td>2  </td>
    <td>7  </td>
  </tr>
</table>

<h4 id="evolutionary-selection">Evolutionary Selection</h4>
<p>Atributos Seleccionados:<br>
att2, att3, att6, att7, att9, att11, att14, att17, att19, att20, att22, att24, att26, att29, att30, att32, att34, att36, att37, att39, att42, att44, att47, att48, att49, att53, att54, att55, att57 <br>
Total: 29 atributos  </p>
<p>PerformanceVector:<br>
accuracy: 84.17% +/- 16.87% (micro average: 84.38%)   </p>
<p>ConfusionMatrix:  </p>
<table>
  <tr>
    <th>True:  </th>
    <th>1  </th>
    <th>2  </th>
    <th>3  </th>
  </tr>
  <tr>
    <td>1:  </td>
    <td>8  </td>
    <td>1  </td>
    <td>0  </td>
  </tr>
  <tr>
    <td>2:  </td>
    <td>1  </td>
    <td>11  </td>
    <td>2  </td>
  </tr>
  <tr>
    <td>3:  </td>
    <td>0  </td>
    <td>1  </td>
    <td>8  </td>
  </tr>
</table>

<h3 id="k-nn">K-NN</h3>
<h4 id="forward-selection_1">Forward Selection</h4>
<p>Atributos Seleccionados:<br>
att7, att41<br>
Total: 2  </p>
<p>PerformanceVector:<br>
accuracy: 67.50% +/- 26.77% (micro average: 65.62%)<br>
ConfusionMatrix:  </p>
<table>
  <tr>
    <th>True:  </th>
    <th>1  </th>
    <th>2  </th>
    <th>3  </th>
  </tr>
  <tr>
    <td>1:  </td>
    <td>8  </td>
    <td>3  </td>
    <td>1  </td>
  </tr>
  <tr>
    <td>2:  </td>
    <td>1  </td>
    <td>10  </td>
    <td>6  </td>
  </tr>
  <tr>
    <td>3:  </td>
    <td>0  </td>
    <td>0  </td>
    <td>3  </td>
  </tr>
</table>

<h4 id="backward-selection_1">Backward Selection</h4>
<p>Atributos Seleccionados:<br>
att3, att4, att5, att7, att8, att9, att10, att11, att13, att14, att16, att17, att18, att19, att20, att21, att22, att23, att24, att25, att26, att27, att28, att29, att30, att31, att32, att33, att34, att35, att36, att37, att38, att39, att40, att41, att42, att43, att44, att45, att46, att47, att48, att49, att50, att51, att52, att53, att54, att55, att56 <br>
Total: 51 </p>
<p>PerformanceVector:<br>
accuracy: 63.33% +/- 34.29% (micro average: 62.50%)<br>
ConfusionMatrix:  </p>
<table>
  <tr>
    <th>True:  </th>
    <th>1  </th>
    <th>2  </th>
    <th>3  </th>
  </tr>
  <tr>
    <td>1:  </td>
    <td>7  </td>
    <td>2  </td>
    <td>1  </td>
  </tr>
  <tr>
    <td>2:  </td>
    <td>1  </td>
    <td>9  </td>
    <td>5  </td>
  </tr>
  <tr>
    <td>3:  </td>
    <td>1  </td>
    <td>2  </td>
    <td>4  </td>
  </tr>
</table>

<h4 id="evolutionary-selection_1">Evolutionary Selection</h4>
<p>Atributos Seleccionados:<br>
att2, att3, att6, att8, att9, att11, att14, att17, att19, att20, att24, att30, att33, att34, att35, att36, att38, att40, att42, att46, att53, att54, att55, att56, att57 <br>
Total: 25   </p>
<p>PerformanceVector:<br>
accuracy: 73.33% +/- 25.09% (micro average: 71.88%)<br>
ConfusionMatrix:  </p>
<table>
  <tr>
    <th>True:  </th>
    <th>1  </th>
    <th>2  </th>
    <th>3  </th>
  </tr>
  <tr>
    <td>1:  </td>
    <td>6  </td>
    <td>3  </td>
    <td>0  </td>
  </tr>
  <tr>
    <td>2:  </td>
    <td>3  </td>
    <td>10  </td>
    <td>3  </td>
  </tr>
  <tr>
    <td>3:  </td>
    <td>0  </td>
    <td>0  </td>
    <td>7  </td>
  </tr>
</table>

<h2 id="conclusionesobservaciones">Conclusiones/Observaciones</h2>
<ul>
<li>Considerando una base de predicción de 33% por elección aleatoria, se lograron buenos modelos con precisiones que superan el 60%  </li>
<li>Se notan en todos los modelos indices sumamente altos de error (+/- 16% hasta +/- 34%). <ul>
<li>Esto puede ser producto de la falta de expresividad y contexto de las variables. Al no poder nosotros trazarles las relaciones correctas dependemos unicamente de los conjuntos optimizados de las heurísticas, los cuales tienen mayor o menor éxito.</li>
</ul>
</li>
<li>Los Forward Selection tienden a usar muy pocos atributos, mientras que Backward tiende a utilizar todos. Evolutionary suele ser más balanceado.  </li>
<li>El modelo mejor adaptado es Naive Bayes utilizando Evolutionary Selection con una precisión de 84.17% +/- 16.87%   <ul>
<li>Este modelo se acopla bien al problema caracterizado por tener todas las variables de tipo categórica, y el método de selección nos permite eliminar el grueso de atributos ruidosos y enfocarnos los más relacionados con la clasificación final.  </li>
</ul>
</li>
<li>El modelo peor adaptado al problema es K-NN con Backward Selection, con una precisión de 63.33% +/- 34.29%  <ul>
<li>Esto puede ser dado por la dificultad del calculo de distancias para variables categóricas y debido a que la Backward Selection mantuvo casi todos los atributos, resultando en un modelo que sufre de la Maldición de la Dimensionalidad.  </li>
</ul>
</li>
</ul>

</section>

          `,
      image: "../../../../../../assets/img/lungCancer/image-12.png",
    },
    {
      title: "Caso: Clasificar Mina o Roca",
      cut: "minas",
      shortDescripton: "Este dataset recopila una serie de patrones que siguen las señales de sonar aplicadas en el suelo, con el objetivo de detectar minas explosivas de meras rocas. Este caso lo abordaremos de manera breve, ya que nos centraremos en un abordaje de demostración de algoritmos de selección de atributos",
      html:
        `
          <section id="content" class="body container">

   <div class="row">
        <div class="eleven columns">


            <header>
              <h2 class="entry-title">
                Investigación Caso: Dataset Sonar</h2>
            </header>
            <footer class="post-info">
              <abbr class="published" title="2023-10-18T00:00:00-03:00">
                mié. 18 Octubre 2023
              </abbr>
              <address class="vcard author">By 
                <a class="url fn" href="/author/salonso1602.html"> salonso1602</a>
              </address>
            </footer><!-- /.post-info -->
            <div class="entry-content">
              <h2 id="introduccion">Introducción</h2>
<p>Este dataset recopila una serie de patrones que siguen las señales de sonar aplicadas en el suelo, con el objetivo de detectar minas explosivas de meras rocas. Este caso lo abordaremos de manera breve, ya que nos centraremos en un abordaje de demostración de algoritmos de selección de atributos.    </p>
<h2 id="datos">Datos</h2>
<p>Cuenta con 208 ejemplos con 60 atributos los cuales representan los diferentes niveles de energía en las diferentes frecuencias y el atributo objetivo que clasifica entre roca y mina (R y M).<br>
Todos los valores se encuentran en un rango de 0 a 1.  </p>
<h2 id="analisis-de-datos">Análisis de datos</h2>
<ul>
<li>Tenemos un balance entre datos de minas y de rocas.<br>
<img alt="Pelican" src="../../../../../../assets/img/sonar/image-2.png">  </li>
<li>Podemos graficar las relaciones entre minas y rocas para todos los atributos y obtenemos el siguiente resultado <br>
<img alt="Pelican" src="../../../../../../assets/img/sonar/image.png">  </li>
<li>Para más claridad podemos usar las desviaciones:<br>
<img alt="Pelican" src="../../../../../../assets/img/sonar/image-1.png">  </li>
</ul>
<p>Se resaltan regiones de atributos que marcan las mayores diferencias entre las dos clases: Atributos del 7 al 15, Atributos del 18 al 25, Atributos del 32 al 38, Atributos del 41 al 50<br>
Estas areas representan los atributos más importantes o que más caracterizan las clases, por lo que son los atributos que nos servirán más para discernir entre las clases.  </p>
<h2 id="modelos-a-usarse">Modelos a Usarse</h2>
<p>Para el presente trabajo utilizaremos 2 modelos para la clasificación: Naive Bayes y Regresión Logística. Para ambos modelos plantearemos un benchmark sin selección de atributos, uno con la selección nuestra (las áreas que resaltamos), y 3 con diferentes algoritmos de selección (Forward Selection, Backward Selection y Evolutionary Selection).  </p>
<p>Tenemos los siguientes procesos en RapidMiner<br>
<img alt="Pelican" src="../../../../../../assets/img/sonar/image-3.png"><br>
<img alt="Pelican" src="../../../../../../assets/img/sonar/image-4.png"><br>
<img alt="Pelican" src="../../../../../../assets/img/sonar/image-5.png"><br>
<img alt="Pelican" src="../../../../../../assets/img/sonar/image-6.png">  </p>
<p>Notas:<br>
- Todos los cross validations son 5-fold<br>
- Todos los algoritmos de selección tienen el mismo Subproceso (el cross validation)<br>
- Los subprocesos de los Cross Validation son iguales para ambos algoritmos. Por brevedad se muestra 1 solo, pero lo único que cambia es el modelo creado.  </p>
<h2 id="resultados">Resultados</h2>
<h3 id="naive-bayes">Naive Bayes</h3>
<h4 id="benchmark">Benchmark</h4>
<p><img alt="Pelican" src="../../../../../../assets/img/sonar/image-7.png">  </p>
<h4 id="con-seleccion-previa-de-atributos">Con Selección Previa de Atributos</h4>
<p><img alt="Pelican" src="../../../../../../assets/img/sonar/image-8.png">  </p>
<h4 id="con-forward-selection">Con Forward Selection</h4>
<p><img alt="Pelican" src="../../../../../../assets/img/sonar/image-9.png"><br>
Atributos:<br>
- attribute_15<br>
- attribute_17<br>
- attribute_18  </p>
<h4 id="con-backward-selection">Con Backward Selection</h4>
<p><img alt="Pelican" src="../../../../../../assets/img/sonar/image-10.png"><br>
Atributos <strong>OMITIDOS</strong>:<br>
- attribute_3<br>
- attribute_14<br>
- attribute_20<br>
- attribute_36<br>
- attribute_47<br>
- attribute_48<br>
- attribute_52<br>
- attribute_59  </p>
<h4 id="con-evolutionary-selection">Con Evolutionary Selection</h4>
<p><img alt="Pelican" src="../../../../../../assets/img/sonar/image-11.png"><br>
Atributos:<br>
- attribute_6<br>
- attribute_7<br>
- attribute_9<br>
- attribute_11<br>
- attribute_12<br>
- attribute_13<br>
- attribute_15<br>
- attribute_16<br>
- attribute_17<br>
- attribute_18<br>
- attribute_19<br>
- attribute_20<br>
- attribute_24<br>
- attribute_25<br>
- attribute_27<br>
- attribute_31<br>
- attribute_35<br>
- attribute_36<br>
- attribute_37<br>
- attribute_41<br>
- attribute_43<br>
- attribute_44<br>
- attribute_46<br>
- attribute_49<br>
- attribute_54  </p>
<h3 id="regresion-logistica">Regresión Logística</h3>
<h4 id="benchmark_1">Benchmark</h4>
<p><img alt="Pelican" src="../../../../../../assets/img/sonar/image-12.png">  </p>
<h4 id="con-seleccion-previa-de-atributos_1">Con Selección Previa de Atributos</h4>
<p><img alt="Pelican" src="../../../../../../assets/img/sonar/image-13.png">  </p>
<h4 id="con-forward-selection_1">Con Forward Selection</h4>
<p><img alt="Pelican" src="../../../../../../assets/img/sonar/image-14.png"><br>
Atributos:<br>
- attribute_4<br>
- attribute_11<br>
- attribute_32<br>
- attribute_36<br>
- attribute_45<br>
- attribute_54  </p>
<h4 id="con-backward-selection_1">Con Backward Selection</h4>
<p><img alt="Pelican" src="../../../../../../assets/img/sonar/image-15.png"><br>
Atributos <strong>OMITIDOS</strong>:<br>
- attribute_1<br>
- attribute_19<br>
- attribute_20<br>
- attribute_22<br>
- attribute_44<br>
- attribute_47<br>
- attribute_54<br>
- attribute_57  </p>
<h4 id="con-evolutionary-selection_1">Con Evolutionary Selection</h4>
<p><img alt="Pelican" src="../../../../../../assets/img/sonar/image-16.png"><br>
Atributos:<br>
- attribute_6<br>
- attribute_7<br>
- attribute_10<br>
- attribute_11<br>
- attribute_12<br>
- attribute_13<br>
- attribute_15<br>
- attribute_18<br>
- attribute_19<br>
- attribute_20<br>
- attribute_24<br>
- attribute_25<br>
- attribute_27<br>
- attribute_32<br>
- attribute_37<br>
- attribute_38<br>
- attribute_41<br>
- attribute_44<br>
- attribute_46<br>
- attribute_49<br>
- attribute_54<br>
- attribute_55  </p>
<h2 id="conclusiones">Conclusiones</h2>
<ul>
<li>Se nota que el algoritmo Evolutionary se aproxima bastante a los atributos que nosotros tomamos como los más relevantes, forward selection toma pocos atributos que a veces coinciden y backward toma casi todos, pero omitiendo algunos de los que elegimos.  </li>
<li>El modelo más performante es Regresión Logística con Backward selection (~83%) , pero dada la enorme cantidad de atributos que toma se puede sospechar de cierto sobre-ajuste, por lo que decidimos confiar en el modelo construido por Evolutionary selection, que tiene una precisión similar (~82%) y se aproxima más a lo investigado de los datos (los atributos que elegimos).  </li>
<li>Los algoritmos de selección pueden dar mejoras de hasta 10% de precisión, lo cual es muy útil cuando no se posee muchos detalles de los atributos o lo que describen.  </li>
<li>Estos algoritmos se deben usar con cuidado ya que pueden terminar en sobre-ajuste que no representa las relaciones entre variables en la realidad.  </li>
</ul>

</section>

          `,
      image: "../../../../../../assets/img/sonar/image.png"
    },
    {
      title: "Caso: Ecoli",
      cut: "ecoli",
      shortDescripton: `
      En el contexto del
  estudio sobre bacterias gramnegativas, se busca predecir la localización de
  proteínas utilizando algoritmos de machine learning. Este enfoque implica
  clasificar las proteínas según su ubicación en el organismo. La aplicación de
  diversos algoritmos contribuirá a este proceso de clasificación, permitiendo
  una mejor comprensión de la distribución y función de las proteínas en
  bacterias gramnegativas.
      `,
      html:
        `
    <div class="container">
  <h1>Informe de Análisis de Dataset Ecoli</h1>

<img
  class="img-fluid mb-3"
  src="../../../../../../assets/img/ecoli/ecoli-reference.jpg"
/>

<h2>Relevancia y objetivo del caso de estudio</h2>
<br>
  La bacteria Escherichia coli (E. coli) es comúnmente hallada en los intestinos
  de personas y animales sanos, siendo la mayoría de sus cepas inofensivas o
  causantes de diarrea breve. </br>Sin embargo, ciertas variantes, como la
  Escherichia coli O157:H7, pueden provocar síntomas más severos como cólicos
  abdominales intensos, diarrea con sangre y vómitos. </br>La exposición a esta
  bacteria puede ocurrir a través de agua o alimentos contaminados,
  especialmente vegetales crudos y carne de res poco cocida. En el contexto del
  estudio sobre bacterias gramnegativas, se busca predecir la localización de
  proteínas utilizando algoritmos de machine learning.</br> Este enfoque implica
  clasificar las proteínas según su ubicación en el organismo. La aplicación de
  diversos algoritmos contribuirá a este proceso de clasificación, permitiendo
  una mejor comprensión de la distribución y función de las proteínas en
  bacterias gramnegativas.
</p>

<h2>Referencia:</h2>
<p>
  "Un Sistema de Clasificación Probabilística para Predecir los Sitios de
  Localización Celular de Proteínas", Paul Horton y Kenta Nakai, Sistemas
  Inteligentes en Biología Molecular, 109-115. St. Louis, EE. UU. 1996.
</p>

<p>El estudio es realizado en el marco del proceso CRISP-DM:</p>
<img class="img-fluid mb-3" src="../../../../../../assets/img/ecoli/1.jpg" />

<h2>Comprensión del negocio</h2>
<p>
  El objetivo principal es analizar y predecir la localización de las proteínas
  de Escherichia coli (E.Coli) en células bacterianas. Este dataset contiene
  diversas características que representan propiedades fisicoquímicas de las
  proteínas, con el fin de desarrollar modelos que puedan identificar la
  localización subcelular de dichas proteínas.
</p>

<h2>Comprensión de los datos</h2>
<p>
  El dataset contiene 336 registros, cada uno de ellos con 8 atributos y una
  clase predictora. Los atributos son:
</p>
<ul>
  <li>
    <strong>Nombre de la Secuencia:</strong> Número de acceso para la base de
    datos SWISS-PROT
  </li>
  <li>
    <strong>mcg:</strong> Método de McGeoch para reconocimiento de secuencias de
    señal.
  </li>
  <li>
    <strong>gvh:</strong> Método de von Heijne para reconocimiento de secuencias
    de señal.
  </li>
  <li>
    <strong>lip:</strong> Puntuación de secuencia de consenso de la Señal
    Peptidasa II de von Heijne. Atributo binario.
  </li>
  <li>
    <strong>chg:</strong> Presencia de carga en el N-terminal de lipoproteínas
    predichas. Atributo binario.
  </li>
  <li>
    <strong>aac:</strong> Puntuación del análisis discriminante del contenido de
    aminoácidos de proteínas de la membrana externa y periplásmicas.
  </li>
  <li>
    <strong>alm1:</strong> Puntuación del programa de predicción de región de
    membrana ALOM.
  </li>
  <li>
    <strong>alm2:</strong> Puntuación del programa ALOM después de excluir
    regiones de señal presuntamente escindibles de la secuencia.
  </li>
</ul>
<p>
  Un dato no menor de este dataset es que no contiene valores nulos o faltantes,
  lo que vuelve el caso de estudio y los resultados más realistas.
</p>
<p>
  En cuanto a sus atributos son en su gran mayoría del tipo numérico a excepción
  del nombre de la secuencia y de la Clase predictora.
</p>
<p>La clase predictora es la localización de la proteína, la cual puede ser:</p>

<table border="1">
  <tr>
    <th>NOMBRE ATRIBUTO</th>
    <th>DESCRIPCIÓN</th>
    <th>CANTIDAD</th>
    <th>TIPO DE DATOS</th>
    <th>FALTANTES</th>
    <th>ROL</th>
  </tr>
  <tr>
    <td>SequenceName</td>
    <td>Nombre de la secuencia</td>
    <td>336</td>
    <td>Polinomial</td>
    <td>no</td>
    <td>regular</td>
  </tr>
  <tr>
    <td>cp (citoplasma)</td>
    <td>Citoplasma</td>
    <td>143</td>
    <td>Entero</td>
    <td>no</td>
    <td>regular</td>
  </tr>
  <tr>
    <td>im</td>
    <td>Membrana interna sin secuencia de señal</td>
    <td>77</td>
    <td>Entero</td>
    <td>no</td>
    <td>regular</td>
  </tr>
  <tr>
    <td>pp</td>
    <td>Periplasma</td>
    <td>52</td>
    <td>Entero</td>
    <td>no</td>
    <td>regular</td>
  </tr>
  <tr>
    <td>imU</td>
    <td>Membrana interna, secuencia de señal no clivada</td>
    <td>35</td>
    <td>Entero</td>
    <td>no</td>
    <td>regular</td>
  </tr>
  <tr>
    <td>om</td>
    <td>Membrana externa</td>
    <td>20</td>
    <td>Entero</td>
    <td>no</td>
    <td>regular</td>
  </tr>
  <tr>
    <td>omL</td>
    <td>Membrana externa lipoproteica</td>
    <td>5</td>
    <td>Entero</td>
    <td>no</td>
    <td>regular</td>
  </tr>
  <tr>
    <td>imL</td>
    <td>Membrana interna lipoproteica</td>
    <td>2</td>
    <td>Entero</td>
    <td>no</td>
    <td>regular</td>
  </tr>
  <tr>
    <td>imS</td>
    <td>Membrana interna, secuencia de señal clivada</td>
    <td>2</td>
    <td>Entero</td>
    <td>no</td>
    <td>regular</td>
  </tr>
</table>

<h2>Interpretación Preliminar:</h2>
<p>
  El conjunto de datos está orientado a la predicción de la localización
  subcelular de proteínas de E.Coli. Los atributos representan diversos métodos
  de puntuación y análisis de secuencias de proteínas, mientras que la variable
  objetivo son las diferentes localizaciones subcelulares.
</p>

<h2>Estadísticas de los datos</h2>

<img src="../../../../../../assets/img/ecoli/2.jpg" />

<p>
  Como se puede apreciar en la tabla anterior las Estadísticas de los datos
  mostrados por Rapidminer, indican que los datos no tienen valores nulos o
  faltantes, así como también los minimos y máximos de los atributos, junto con
  su media.
</p>

<p>
  A fin de comprender mejor como es que se comportan los datos tenemos la opción
  de poder visualizarlos en un gráfico de barras, en el cual podemos ver como se
  comportan los datos en cada uno de los atributos.
</p>

<img src="../../../../../../assets/img/ecoli/3.jpg" />

<h2>Visualización:</h2>
<p>
  A continuación se reflejaran los comportamientos de los atributos más
  importantes para determinar la localización de las proteínas de E.Coli, en
  función de la clase objetivo.
</p>

<h3>mcg</h3>
<img src="../../../../../../assets/img/ecoli/4.jpg" />
<p>
  En el gráfico anterior se puede apreciar que el atributo mcg tiene un
  comportamiento un tanto variable, ya que la distinción ofrecida por la clase
  objetivo nos indica que a pesar de encontrar un rango especifico en cual
  acotar las fluctuaciones de los datos, estos se encuentran muy dispersos, por
  lo que no se puede determinar una tendencia clara.
</p>

<h3>gvh</h3>
<img src="../../../../../../assets/img/ecoli/5.jpg" />
<p>
  Los valores de gvh presentan un comportamiento similar al atributo mcg, ya que
  a pesar de que se puede apreciar una tendencia de comportamiento para los
  valores de la clase objetivo, estos se encuentran muy dispersos, pero a
  diferencia del atributo mcg, los valores de gvh se encuentran más acotados.
</p>

<h3>alm1</h3>
<img src="../../../../../../assets/img/ecoli/6.jpg" />
<p>
  Al analizar el gráfico anterior se aprecian como este atributo presenta un
  comportamiento más acotado, ya que los valores de la clase objetivo se
  encuentran en un rango más reducido. Lo que nos indica que este atributo es
  más determinante para la predicción de la clase objetivo, esto es de gran
  importancia teniendo en cuenta que el objetivo es buscar la clasificación de
  las proteínas de E.Coli.
</p>

<h2>Preparación de los datos</h2>
<p>
  Utilizando un subproceso denominado "Data Preparation" en RapidMiner, se
  realizaron las tareas de acondicionamiento del dataset. El dataset no presenta
  valores nulos o faltantes, por lo que no es necesario realizar una limpieza de
  datos. </br>Lo que si es necesario hacer es acotar aquellos valores que se
  encuentran fuera de rango, para ello se utilizó el operador "Filter Examples"
  de Rapidminer, el cual nos permite acotar los valores de los atributos que se
  encuentran fuera de rango después de utilizar el operador "Detect Outliers".
</p>

<img src="../../../../../../assets/img/ecoli/7.jpg" />

<p>
  También es preciso indicar cual es el atributo que se desea predecir, para
  ello se utilizó el operador "Set Role" de Rapidminer, el cual nos permite
  indicar cual es el atributo que se desea predecir, en este caso LSOP
  (Localización de los Sitios de Proteína, del inglés Localization Sites Of
  Proteins).
</p>

<p>
  Otra de las tareas que se realiza para la preparación de los datos es la
  normalización de los mismos, para ello se utilizó el operador "Normalize" de
  Rapidminer, el cual nos permite normalizar los datos de los atributos, para
  que estos se encuentren en un rango de 0 a 1.
</p>

<p>
  Finalmente se utilizó el operador "Attribute Weights (Weight by Gini Index)"
  de Rapidminer, el cual nos permite asignar un peso a cada uno de los
  atributos, en función de su importancia para la predicción de la clase
  objetivo. El resultado de este operador se puede apreciar en la siguiente
  gráfica:
</p>
<img src="../../../../../../assets/img/ecoli/8.jpg" />

<h2>Modelado</h2>

<p>
  El problema que presenta el data set es de clasificación, ya que se busca
  predecir la localización de las proteínas de E.Coli, por lo que se utilizaron
  los algoritmos de clasificación que se vieron en el curso de Inteligencia
  Artificial, los cuales son:
</p>

<ul>
  <li>Naive Bayes</li>
  <li>Árbol de Decisión (y su versión optimizada)</li>
  <li>K-NN</li>
  <li>Regresión Logística</li>
</ul>

<img src="../../../../../../assets/img/ecoli/modelo.jpg" />

<p>
  Para cada uno de los algoritmos se utilizó el operador "Cross Validation" de
  Rapidminer, el cual nos permite realizar una validación cruzada de los datos,
  para así poder obtener una mejor precisión de los resultados. </br>Las
  configuraciones utilizada en el operador "Cross Validation" fueron las
  siguientes: - Número de folds: 10 - Sampling Type: Stratified Sampling - Local
  random seed: 1992
</p>

<p>
  A continuación se procederá a explicar el funcionamiento de cada uno de los
  algoritmos utilizados, así como también se explicará el funcionamiento de los
  operadores utilizados para cada uno de ellos.
</p>

<h3>Naive Bayes</h3>

<p>
  El algoritmo de Naive Bayes es un algoritmo de clasificación que se basa en el
  teorema de Bayes, el cual establece que la probabilidad de que ocurra un
  evento A, dado que ha ocurrido un evento B, es igual a la probabilidad de que
  ocurra el evento B, dado que ha ocurrido el evento A, multiplicado por la
  probabilidad de que ocurra el evento A, dividido por la probabilidad de que
  ocurra el evento B.
</p>

<p>
  Como ya se mencionó anteriormente, el modelado de este algoritmo se realizó en
  un "Corss Validation",como se puede apreciar en la imagen inferior:
</p>

<img src="../../../../../../assets/img/ecoli/9.jpg" />

<p>
  Ahora bien, el unico ajuste realizado fue colocar un check en el "laplace
  correction" del operador, y para poder conocer más en detalle los resultados
  obtenidos por el algoritmo, se utilizó el operador "Performance
  (Classification)", el cual nos permite obtener la precisión. </br>Los resultados
  son presentados en la siguiente tabla:
</p>

<img src="../../../../../../assets/img/ecoli/10.jpg" />

<p>
  Como se puede apreciar no es posible predecir las clases "imL", "imS" y "omL",
  ya que que el porcentaje de precisión es igual a 0. Esto se debe a que no se
  cuenta con suficientes datos para poder predecir dichas clases.
</p>

<h3>Árbol de Decisión</h3>

<p>
  El algoritmo de Árbol de Decisión es un algoritmo de clasificación que se basa
  en la creación de un árbol de decisión, el cual se va creando a partir de los
  atributos que se encuentran en el dataset, para así poder predecir la clase
  objetivo.
</p>

<p>
  La configuración del operador "Decision Tree" se realizó de la siguiente
  manera:
</p>

<ul>
  <li>Criterion: Gain Ratio</li>
  <li>Maximal Depth: 10</li>
  <li>Apply prepruning: true</li>
  <li>Minimal gain: 0.01</li>
  <li>Minimal leaf size: 2</li>
  <li>Minimal size for split : 4</li>
  <li>Number of prepruning alternatives: 3</li>
</ul>

<p>
  Como ya se mencionó anteriormente, el modelado de este algoritmo se realizó en
  un "Cross Validation", así como también el operador "Optimize Parameters
  (Grid)", el cual nos permite optimizar los parámetros del algoritmo.
</p>

<img src="../../../../../../assets/img/ecoli/11.jpg" />

<p>
  El operador "Optimize Parameters (Grid)" se configuro con los siguientes
  parámetros:
</p>
<img src="../../../../../../assets/img/ecoli/12.jpg" />
<img src="../../../../../../assets/img/ecoli/13.jpg" />

<p>
  Ahora bien, para poder conocer más en detalle los resultados obtenidos por el
  algoritmo, se utilizó el operador "Performance (Classification)", el cual como
  ya vimos nos permite obtener la precisión. Los resultados son presentados en
  las siguientes tablas (una para el árbol de decisión y otra para el árbol de
  decisión optimizado):
</p>

<img src="../../../../../../assets/img/ecoli/14.jpg" />
<img src="../../../../../../assets/img/ecoli/15.jpg" />

<p>
  Como se puede apreciar en las tablas anteriores, el árbol de decisión
  optimizado obtuvo mejores resultados que el árbol de decisión, ya que la
  precisión del árbol de decisión optimizado es de 86.22%, mientras que la
  precisión del árbol de decisión es de 83.14%.
</p>

<h3>K-NN</h3>

<p>
  El algoritmo de K-NN es un algoritmo de clasificación que se basa en la
  cercanía de los datos, para así poder predecir la clase objetivo. </br>Este
  algoritmo se basa en la distancia euclidiana, la cual nos permite conocer la
  distancia entre dos puntos.
</p>

<p>La configuración del operador "K-NN" se realizó de la siguiente manera:</p>

<ul>
  <li>Number of neighbors: 5</li>
  <li>Weight vote: checked</li>
  <li>Measure types: Mixed Measures</li>
  <li>Mixed measure: Mixed Euclidean Distance</li>
</ul>

<p>
  Como ya se mencionó anteriormente, el modelado de este algoritmo se realizó en
  un "Cross Validation", lo cual nos permite realizar una validación cruzada de
  los datos, para así poder obtener una mejor precisión de los resultados.
</p>

<img src="../../../../../../assets/img/ecoli/16.jpg" />

<p>
  Siguiendo el mismo procedimiento que con los algoritmos anteriores, se utilizó
  el operador "Performance (Classification)". Los resultados son presentados en
  la siguiente tabla:
</p>

<img src="../../../../../../assets/img/ecoli/17.jpg" />

<p>
  Como se puede apreciar en la tabla anterior, el algoritmo de K-NN obtuvo una
  precisión de 86.52%, lo cual es un resultado bastante bueno, ya que es el
  segundo mejor resultado obtenido. Y el error de aproximación es de +/- 4.52%,
  lo cual es un resultado bastante bueno, ya que es el segundo mejor resultado
  obtenido.
</p>

<h3>Regresión Logística</h3>

<p>
  El algoritmo de Regresión Logística es un algoritmo de clasificación que se
  basa en la regresión logística, la cual nos permite conocer la probabilidad de
  que ocurra un evento, en función de una o más variables independientes.
</p>

<p>
  La configuración del operador "Logistic Regression" se realizó de la siguiente
  manera:
</p>

<ul>
  <li>Family: AUTO</li>
  <li>Solver: AUTO</li>
  <li>Reproducible: checked</li>
  <li>Maximum number of threads: 4</li>
  <li>Use regularization: checked</li>
  <li>Add intercept (Incluye las variables constantes): checked</li>
</ul>

<p>
  Como ya se mencionó anteriormente, el modelado de este algoritmo se realizó en
  un "Cross Validation", lo cual nos permite realizar una validación cruzada de
  los datos, para así poder obtener una mejor precisión de los resultados.
</p>

<img src="../../../../../../assets/img/ecoli/18.jpg" />

<p>
  Siguiendo el mismo procedimiento que con los algoritmos anteriores, se utilizó
  el operador "Performance (Classification)". Los resultados son presentados en
  la siguiente tabla:
</p>

<img src="../../../../../../assets/img/ecoli/19.jpg" />

<p>
  Como se puede apreciar en la tabla anterior, el algoritmo de Regresión
  Logística obtuvo una precisión de 87.77%, lo cual es el mejor resultado
  obtenido. Y el error de aproximación es de +/- 7.57%, el cual es el peor
  resultado obtenido.
</p>

<h2>Evaluación</h2>

<p>
  Para cada uno de los algoritmos se utilizó el operador "Performance
  (Classification)" de Rapidminer, el cual nos permite obtener la precisión de
  los resultados obtenidos por cada uno de los algoritmos, estableciendo que su
  criterio principal de evaluación sea la precisión.
</p>

<p>
  Los resultados obtenidos por cada uno de los algoritmos se pueden apreciar en
  la siguiente tabla:
</p>

<table border="1">
  <tr>
    <th>Algoritmo</th>
    <th>Precisión</th>
    <th>Error de aproximación</th>
  </tr>
  <tr>
    <td>Naive Bayes</td>
    <td>77.37%</td>
    <td>+/- 6.28%</td>
  </tr>
  <tr>
    <td>Árbol de Decisión</td>
    <td>83.14%</td>
    <td>+/- 5.37%</td>
  </tr>
  <tr>
    <td>Árbol de Decisión (Optimizado)</td>
    <td>86.22%</td>
    <td>+/- 5.35%</td>
  </tr>
  <tr>
    <td>K-NN</td>
    <td>86.52%</td>
    <td>+/- 4.52%</td>
  </tr>
  <tr>
    <td>Regresión Logística</td>
    <td>87.77%</td>
    <td>+/- 7.57%</td>
  </tr>
</table>

<p>
  Como se puede apreciar en la tabla anterior, el algoritmo que obtuvo mejores
  resultados fue el de Regresión Logística, con una precisión de 87.77% y un
  error de aproximación de +/- 7.57%. Sin embargo, el algoritmo que obtuvo
  mejores resultados en cuanto a precisión y error de aproximación fue el de
  K-NN, con una precisión de 86.52% y un error de aproximación de +/- 4.52%.
</p>

<h2>Conclusiones</h2>

<p>
  El objetivo principal de este caso de estudio es analizar y predecir la
  localización de las proteínas de Escherichia coli (E.Coli), una de las
  bacterias más comunes en el intestino de personas y animales sanos. Para ello
  se utilizó un dataset que contiene diversas características que representan
  propiedades fisicoquímicas de las proteínas, con el fin de desarrollar modelos
  que puedan identificar la localización subcelular de dichas proteínas.
</p>

<p>
  El estudio se realizó en el marco del proceso CRISP-DM, el cual nos permite
  realizar un estudio de minería de datos, el cual se divide en 6 fases, las
  cuales vimos a lo largo del caso de estudio.
</p>

<p>
  En cuanto a los resultados obtenidos, se puede concluir que el algoritmo que
  obtuvo mejores resultados fue el de Regresión Logística, con una precisión de
  87.77% y un error de aproximación de +/- 7.57%. Sin embargo, el algoritmo que
  obtuvo mejores resultados en cuanto a precisión y error de aproximación fue el
  de K-NN, con una precisión de 86.52% y un error de aproximación de +/- 4.52%.
</p>

<p>
  Finalmente, se puede concluir que el objetivo principal del caso de estudio se
  cumplió, ya que se logró analizar y predecir la localización de las proteínas
  de Escherichia coli (E.Coli), una de las bacterias más comunes en el intestino
  de personas y animales sanos.
</p>
</div>
      `,
      image: "../../../../../../assets/img/ecoli/5.jpg"
    },
    {
      title: "Clustering de Clientes",
      cut: "clients cluster",
      html: `
      <div class="container">
      <h1>Clustering de Clientes</h1>

<p>En este proyecto, nos sumergimos en el análisis de datos utilizando técnicas de agrupamiento para segmentar a los clientes de un supermercado. La agrupación consiste en reunir puntos de datos similares según una métrica de similitud seleccionada, revelando patrones y estructuras inherentes en el conjunto de datos sin depender de categorías predefinidas.</p>

<h2>Conjunto de Datos</h2>
<p>La fuente de nuestros datos proviene de un centro comercial de supermercados y se recopila a través de tarjetas de membresía. La información sobre los clientes incluye el ID del cliente, edad, género, ingreso anual y puntaje de gasto. Estos atributos proporcionan una visión integral de cada perfil de cliente, estableciendo la base para un análisis perspicaz.</p>

<h2>Objetivo</h2>
<p>El propósito principal de este proyecto es identificar y definir diferentes segmentos de clientes mediante el uso de algoritmos de agrupamiento. Estos segmentos se convertirán en la base para adaptar estrategias de marketing que se alineen con las necesidades y preferencias únicas de cada grupo, mejorando en última instancia la experiencia general del cliente.</p>

<h2>Análisis de Datos</h2>
<p>Este conjunto de datos consta de 2000 filas y 8 columnas, donde cada columna contiene exclusivamente datos enteros. Es importante destacar que el conjunto de datos está completo, sin valores faltantes en ninguna de sus entradas.</p>
<h2>Explicación de Cada Columna</h2>

<ul>
  <li><strong>Sexo:</strong> Género biológico del cliente</li>
  <ul>
    <li>0: Masculino</li>
    <li>1: Femenino</li>
  </ul>

  <li><strong>Estado civil:</strong> Estado civil del cliente</li>
  <ul>
    <li>0: Soltero</li>
    <li>1: No soltero (divorciado/separado/casado/viudo)</li>
  </ul>

  <li><strong>Edad:</strong> Edad del cliente en años</li>

  <li><strong>Educación:</strong> Nivel educativo del cliente</li>
  <ul>
    <li>0: Otro/Desconocido</li>
    <li>1: Escuela secundaria</li>
    <li>2: Universidad</li>
    <li>3: Posgrado</li>
  </ul>

  <li><strong>Ingresos:</strong> Ingresos anuales autoinformados en dólares estadounidenses del cliente</li>

  <li><strong>Ocupación:</strong> Categoría de ocupación del cliente</li>
  <ul>
    <li>0: Desempleado/No calificado</li>
    <li>1: Empleado cualificado/Funcionario</li>
    <li>2: Gestión/Independiente/Empleado altamente calificado/Funcionario</li>
  </ul>

  <li><strong>Tamaño de la ciudad:</strong> Tamaño de la ciudad donde reside el cliente</li>
  <ul>
    <li>0: Ciudad pequeña</li>
    <li>1: Ciudad mediana</li>
    <li>2: Gran ciudad</li>
  </ul>
</ul>

<!-- Insertar las imágenes correspondientes aquí -->
<img src="../../../../../../assets/img/clientCluster/img1.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen2.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen3.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen4.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen5.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen6.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen7.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen8.jpg" />

<h2>Análisis de las Columnas Numéricas</h2>

<!-- Insertar las imágenes correspondientes aquí -->
<img src="../../../../../../assets/img/clientCluster/Imagen9.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen10.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen11.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen12.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen13.jpg" />

<p>Como se puede observar en ambos histogramas, las distribuciones presentan una clara asimetría hacia la derecha. Esta característica indica una distribución con una cola más extensa que se extiende hacia los valores más altos. La naturaleza sesgada hacia la derecha sugiere que, aunque la mayoría de los datos tiende a agruparse a la izquierda, no se esperan otras características destacadas. En cuanto a la edad, el conjunto de datos está predominantemente conformado por individuos con edades comprendidas entre los 25 y 35 años. En lo que respecta a los ingresos, la mayoría se encuentra en el rango de 100,000 a 120,000. Más allá de este intervalo, el número de personas disminuye a medida que aumentan los niveles de ingresos.</p>

<h2>Exploración de Datos</h2>

<!-- Insertar las imágenes correspondientes aquí -->
<img src="../../../../../../assets/img/clientCluster/Imagen16.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen17.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen18.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen19.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen20.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen21.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen22.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen23.jpg" />


<p>El conjunto de datos está mayoritariamente conformado por hombres, representando la mayoría con 1,086 filas. Existe una paridad notable entre individuos solteros y no solteros. En cuanto a los niveles educativos, la categoría de "Escuela Secundaria" lidera con la mayor proporción, seguida por "Universidad" y "Otro". Los trabajadores cualificados encabezan la clasificación ocupacional, seguidos de cerca por los desempleados. En términos de residencia, la mayoría de los individuos en el conjunto de datos residen en ciudades pequeñas, seguidas por ciudades medianas, con una presencia menor en ciudades más grandes.</p>

<h2>Exploración Detallada</h2>

<!-- Insertar las imágenes correspondientes aquí -->
<img src="../../../../../../assets/img/clientCluster/Imagen24.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen25.jpg" />

<p>Obs: Los hombres en el conjunto de datos tienden a tener salarios más altos en comparación con las mujeres.</p>

<!-- Insertar las imágenes correspondientes aquí -->
<img src="../../../../../../assets/img/clientCluster/Imagen26.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen27.jpg" />

<p>Obs: Los hombres dominan tanto en ciudades grandes como en ciudades medianas, mientras que las mujeres son más prevalentes en ciudades pequeñas.</p>

<img src="../../../../../../assets/img/clientCluster/Imagen28.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen29.jpg" />

<p>Obs: Entre las mujeres, un porcentaje más alto posee calificaciones educativas que van desde la escuela secundaria hasta la escuela de posgrado. En contraste, los hombres muestran una variedad de antecedentes educativos.</p>

<!-- Insertar las imágenes correspondientes aquí -->
<img src="../../../../../../assets/img/clientCluster/Imagen30.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen31.jpg" />

<p>Obs: A pesar de que las mujeres tienen antecedentes educativos más elevados, los hombres tienden a dominar en roles calificados y altamente cualificados. Por otro lado, una parte significativa de las mujeres en el conjunto de datos tiene un estado de desempleo.</p>

<!-- Insertar las imágenes correspondientes aquí -->
<img src="../../../../../../assets/img/clientCluster/Imagen32.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen33.jpg" />

<p>Obs: En ciudades pequeñas, la mayoría de las personas están desempleadas, seguidas de cerca por empleados calificados. En contraste, las ciudades medianas y grandes muestran una tendencia diferente, con una mayor concentración de empleados calificados. Además, las grandes ciudades destacan por una notable presencia de empleados altamente cualificados.</p>

<img src="../../../../../../assets/img/clientCluster/Imagen34.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen35.jpg" />

<p>Obs: El histograma ofrece una representación visual clara de la distribución de ingresos. Las personas en la categoría de desempleados, que representan varios tipos de empleo, generalmente tienen los salarios más bajos, a menudo por debajo de los 50,000. Por otro lado, los empleados calificados tienden a ganar salarios que van desde 100,000 hasta aproximadamente 150,000. Destacadamente, aquellos en posiciones altamente cualificadas disfrutan de un rango de ingresos más alto, típicamente entre 150,000 y incluso 300,000.</p>

<h2>Aplicando el Modelo</h2>

<img src="../../../../../../assets/img/clientCluster/Imagen36.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen37.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen38.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen39.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen40.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen41.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen42.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen43.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen44.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen45.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen46.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen47.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen48.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen49.jpg" />


<h2>Conclusiones</h2>
<h2>Cluster 0:</h2>
<ul>
  <li><strong>Género:</strong> Hay más mujeres que hombres.</li>
  <li><strong>Estado Civil:</strong> Los solteros superan a los no solteros.</li>
  <li><strong>Edad:</strong> Edades de 30 a 40 años.</li>
  <li><strong>Educación:</strong> Estudiantes universitarios.</li>
  <li><strong>Ingresos:</strong> Ingresos de 100,000 a 180,000.</li>
  <li><strong>Ocupación:</strong> Empleados.</li>
  <li><strong>Tamaño de la Ciudad:</strong> Ciudad Pequeña > Ciudad Mediana > Ciudad Grande.</li>
</ul>

<!-- Cluster 1 -->
<h2>Cluster 1:</h2>
<ul>
  <li><strong>Género:</strong> Hay más mujeres que hombres.</li>
  <li><strong>Estado Civil:</strong> Los solteros superan a los no solteros.</li>
  <li><strong>Edad:</strong> Edades de 40 a 50 años.</li>
  <li><strong>Educación:</strong> Estudiantes universitarios.</li>
  <li><strong>Ingresos:</strong> Ingresos de 120,000 a 140,000.</li>
  <li><strong>Ocupación:</strong> Empleados y desempleados.</li>
  <li><strong>Tamaño de la Ciudad:</strong> Ciudad Pequeña.</li>
</ul>

<!-- Cluster 2 -->
<h2>Cluster 2:</h2>
<ul>
  <li><strong>Género:</strong> Hay más mujeres que hombres.</li>
  <li><strong>Estado Civil:</strong> Los solteros superan a los no solteros.</li>
  <li><strong>Edad:</strong> Edades de 40 a 50 años.</li>
  <li><strong>Educación:</strong> Estudiantes universitarios y posgraduados.</li>
  <li><strong>Ingresos:</strong> Ingresos de 175,000 a 300,000.</li>
  <li><strong>Ocupación:</strong> Altamente empleados.</li>
  <li><strong>Tamaño de la Ciudad:</strong> Ciudad Grande y Ciudad Mediana.</li>
</ul>

<!-- Cluster 3 -->
<h2>Cluster 3:</h2>
<ul>
  <li><strong>Género:</strong> Hombres y mujeres casi iguales.</li>
  <li><strong>Estado Civil:</strong> Los solteros superan a los no solteros.</li>
  <li><strong>Edad:</strong> Edades de 20 a 40 años.</li>
  <li><strong>Educación:</strong> Estudiantes universitarios.</li>
  <li><strong>Ingresos:</strong> Ingresos de 40,000 a 100,000.</li>
  <li><strong>Ocupación:</strong> Desempleados.</li>
  <li><strong>Tamaño de la Ciudad:</strong> Ciudad Pequeña.</li>
</ul>

<!-- Cluster 4 -->
<h2>Cluster 4:</h2>
<ul>
  <li><strong>Género:</strong> Hay más mujeres que hombres.</li>
  <li><strong>Estado Civil:</strong> Casi igual cantidad de solteros y no solteros.</li>
  <li><strong>Edad:</strong> Edades de 50 a 70 años.</li>
  <li><strong>Educación:</strong> Posgraduados.</li>
  <li><strong>Ingresos:</strong> Ingresos de 120,000 a 220,000.</li>
  <li><strong>Ocupación:</strong> Empleados y altamente empleados.</li>
  <li><strong>Tamaño de la Ciudad:</strong> Ciudad Mediana > Ciudad Grande > Ciudad Pequeña.</li>
</ul>

<!-- Cluster 5 -->
<h2>Cluster 5:</h2>
<ul>
  <li><strong>Género:</strong> Hay más hombres que mujeres.</li>
  <li><strong>Estado Civil:</strong> Los no solteros superan a los solteros.</li>
  <li><strong>Edad:</strong> Edades de 20 a 30 años.</li>
  <li><strong>Educación:</strong> Estudiantes universitarios.</li>
  <li><strong>Ingresos:</strong> Ingresos de 100,000 a 130,000.</li>
  <li><strong>Ocupación:</strong> Empleados.</li>
  <li><strong>Tamaño de la Ciudad:</strong> Ciudad Pequeña > Ciudad Mediana > Ciudad Grande.</li>
</ul>

<!-- Insertar las imágenes correspondientes aquí -->
<img src="../../../../../../assets/img/clientCluster/Imagen50.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen51.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen52.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen53.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen54.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen55.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen56.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen57.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen58.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen59.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen60.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen61.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen62.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen63.jpg" />
<img src="../../../../../../assets/img/clientCluster/Imagen64.jpg" />

      </div>
      `,
      shortDescripton: `
      Nos sumergimos en el análisis de datos utilizando técnicas de agrupamiento para segmentar a los clientes de un supermercado. La agrupación consiste en reunir puntos de datos similares según una métrica de similitud seleccionada, revelando patrones y estructuras inherentes en el conjunto de datos sin depender de categorías predefinidas.
      `,
      image: "../../../../../../assets/img/clientCluster/Imagen46.jpg"
    },
    {
      title: "Dataset Iris orientado al clustering",
      cut: "iris-cluster",
      html: `
      <div class="container">
      <h1>Informe de Análisis de Dataset Iris</h1>
        <h2>Objetivo:</h2>
        <p>
            Si bien el dataset Iris es usado con frecuencia para problemas de clasificación, en este caso decidí abordar un problema de agrupamiento usando este mismo. Por lo tanto, el objetivo principal del problema de clustering en este contexto es agrupar las observaciones en función de similitudes en las características morfológicas, sin tener en cuenta las etiquetas de clase. Es decir, explorar y descubrir patrones de agrupamiento que pueden ayudar en la comprensión de la variabilidad de las características en el conjunto de datos.
        </p>
    
        <h2>Tipo de problema:</h2>
        <p>
            Este enfoque, cuando se utiliza el conjunto de datos Iris enfocado en el clustering, pertenece al tipo de problema de clustering no supervisado. Es importante tener en cuenta que:
        </p>
        <ul>
            <li>En este enfoque, el objetivo no es predecir una etiqueta de clase específica, sino descubrir patrones y estructuras ocultas en los datos mediante la formación de grupos (clusters) de observaciones similares.</li>
            <li>Los datos conservan su naturaleza original, que consta de cuatro características numéricas continuas: longitud y ancho del sépalo, longitud y ancho del pétalo. Sin embargo, las etiquetas de clase (especies de iris) se eliminan, ya que en un problema de clustering no se utilizan.</li>
        </ul>
    
        <h2>Entorno de desarrollo:</h2>
        <p>
            En este caso optaremos por el uso de la herramienta RapidMiner. Esta nos permitirá llevar a cabo el análisis de datos y la implementación de diversos modelos. Esto con el fin de obtener una solución lo más acertada posible a nuestro objetivo.
        </p>
        <p>
            Sobre RapidMiner:
            RapidMiner es utilizado en una variedad de industrias, desde la salud y las finanzas hasta la fabricación y la investigación académica, para abordar una amplia gama de problemas de análisis de datos y aprendizaje automático. Es una plataforma de código abierto y una suite de software para la ciencia de datos, el aprendizaje automático y el análisis avanzado de datos. Fue desarrollada para facilitar y acelerar el proceso de análisis de datos y la construcción de modelos predictivos, lo que la convierte en una herramienta valiosa para científicos de datos, analistas y profesionales en el campo de la inteligencia empresarial. Cabe destacar, que además de su edición de código abierto, también existe una versión comercial con características adicionales y soporte profesional.
            Para más información puede visitar el sitio oficial: <a href="https://rapidminer.com/">https://rapidminer.com/</a>
        </p>
    
        <h2>Análisis del dataset, preparación de datos y selección de atributos:</h2>
        <p>
            Antes que nada, es vital saber, que para abordar el conjunto de datos Iris como un problema de agrupamiento, se deben suprimir las etiquetas de clase (las especies de iris) en el conjunto de datos para que el algoritmo de agrupamiento no tenga acceso a esta información. Para eso usaremos el operador “Select Atributes”
        </p>
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_1.png">
    
        <p>
            Algo que siempre queremos hacer al momento de trabajar con análisis de clustering o cualquier otro método que trabaje con distancias es normalizar los datos. Esto nos ayuda a evitar que se dé un “peso” no correspondiente en el análisis a las variables que se miden en una escala mucho mayor. Un buen ejemplo de esto es la variable “Petal.Length” (el cual se mide en la escala más grande).
        </p>
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_2.png">
    
        <p>
            En este caso usaremos el operador “Normalize” (Z-transformation) para solucionar este problema.
        </p>
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_3.png">
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_4.png">
    
        <p>
            Otra observación relevante dentro de esta sección del caso de prueba es que se puede observar, que este dataset no contiene ningún Missing Value. Por lo tanto, usar algún operador relacionado a los mismos no es necesario, pues no jugaría un papel relevante en el análisis.
        </p>
    
        <h2>Modelo elegido:</h2>
        <p>
            Usaremos el operador enfocado en clustering llamado “k-Means”. Este operador, tiene como objetivo principal agrupar un conjunto de datos en "K" clusters, donde "K" es un número predefinido. Cada cluster representa un grupo de puntos de datos que son similares entre sí en función de las características utilizadas en el análisis.
        </p>
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_5.png">
    
        <p>
            Con este nos centraremos en probar con diversos valores de k (modificable en los parámetros del operador).
        </p>
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_6.png">
    
        <p>
            También recurriremos al operador “Cluster Distance Performance”, este se utiliza para evaluar el rendimiento de un modelo de clustering, como K-Means, en función de cómo los datos se agrupan en diferentes clusters. Proporciona métricas que evalúan la calidad de los clusters formados por el modelo.
        </p>
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_7.png">
    
        <h2>La estructura final del proceso debería ser la siguiente:</h2>
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_8.png">
    
        <p>
            Probaremos el proceso con diversos valores de k, esto con la finalidad de ver para qué valor del mismo se ajusta mejor en relación a nuestro objetivo.
        </p>
        
        <p>
          K = 2
        </p>
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_9.png">
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_10.png">
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_11.png">
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_12.png">

        <p>
          K = 3
        </p>
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_13.png">
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_14.png">
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_15.png">
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_16.png">

        <p>
          K = 4
        </p>
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_17.png">
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_18.png">
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_19.png">
        <img src="../../../../../../assets/img/clustering_iris/clustering_iris_20.png">
    
        <h2>Análisis de Resultados:</h2>
        <p>
            En el caso del dataset Iris, sabemos de antemano que tienes tres tipos de flores (setosa, versicolor y virginica) como etiquetas o clases. Si realizamos un análisis de clustering sin utilizar esta información de clase y tratar de descubrir agrupamientos naturales basados solo en las características, no tendría sentido probar con un número de clusters "k" mayor a 3.
        </p>
        <p>
            El algoritmo k-Means agrupa datos en un número específico de clusters, y en este caso, lo lógico sería configurar "k" en 3, ya que sabes que hay tres clases reales en el conjunto de datos. Utilizar un número mayor de clusters solo dividiría los datos en grupos adicionales que no tienen un significado intrínseco en el contexto de las especies de iris (incluso los resultados para k= 3 son muy acordes a lo que refleja el dataset original sin eliminar las clases).
        </p>
    
        <p>
            Sin embargo, hacer esto se podría considerar “trampa”, o una ventaja un tanto injusta, pues no siempre sabremos de antemano cuántas clases tendremos en el dataset. Por lo tanto, para ser objetivos tomaremos dos métricas relevantes: el promedio de la distancia dentro del centroide (Avg. within centroid distance) y el índice Davies-Bouldin (Davies Bouldin):
        </p>
        
        <p>
            Teniendo esto en cuenta y que las distancias deben ser medidas en valor absoluto (pues no tiene sentido que sean negativas):
        </p>
        <ul>
            <li>En términos del índice Davies-Bouldin, un valor más bajo en términos absolutos indica un mejor rendimiento del modelo de clustering. Por lo tanto, "PerformanceVector(k=2)" con un valor absoluto de 0.598 es el mejor, seguido por "PerformanceVector(k=3)" con un valor absoluto de 0.834 y luego "PerformanceVector(k=4)" con un valor absoluto de 0.866.</li>
            <li>En cuanto al promedio de la distancia dentro del centroide, un valor más bajo en términos absolutos indica un mejor rendimiento. En este aspecto, "PerformanceVector(k=4)" con un valor absoluto de 0.758 es el mejor, seguido por "PerformanceVector(k=3)" con un valor absoluto de 0.935 y luego "PerformanceVector(k=2)" con un valor absoluto de 1.482.</li>
        </ul>
    
        <h2>Posibles mejoras por evaluar:</h2>
        <ul>
            <li>Uso de métricas múltiples: En lugar de depender de una sola métrica, considera utilizar varias métricas de evaluación para obtener una imagen más completa del rendimiento de tu modelo. Algunas métricas pueden ser más apropiadas para ciertos tipos de datos o problemas.</li>
            <li>Validación cruzada: La validación cruzada, como la validación cruzada k-fold o la validación cruzada leave-one-out, puede ayudarte a evaluar la estabilidad del modelo y reducir el riesgo de sobreajuste. Esto es especialmente útil cuando tienes un conjunto de datos pequeño.</li>
            <li>Selección de características: Si estás trabajando con conjuntos de datos de alta dimensionalidad, considera técnicas de selección de características o reducción de dimensionalidad, como PCA (Análisis de Componentes Principales) o LDA (Análisis de Discriminante Lineal), para mejorar la precisión del modelo y reducir el tiempo de entrenamiento.</li>
        </ul>
        </div>
      `,
      shortDescripton: `
      Por lo tanto, el objetivo principal del problema de clustering en este contexto es agrupar las observaciones en función de similitudes en las características morfológicas, sin tener en cuenta las etiquetas de clase. Es decir, explorar y descubrir patrones de agrupamiento que pueden ayudar en la comprensión de la variabilidad de las características en el conjunto de datos.
      `,
      image: "../../../../../../assets/img/clustering_iris/clustering_iris_19.png"
    }

  ].reverse();

  constructor() { }

}