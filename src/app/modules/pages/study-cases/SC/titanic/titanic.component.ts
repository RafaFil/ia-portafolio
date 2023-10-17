import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ia-titanic',
  templateUrl: './titanic.component.html',
  styleUrls: ['./titanic.component.css']
})
export class TitanicComponent implements OnInit {

  htmlText = `
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

  constructor() { }

  ngOnInit(): void {
  }

}
