# 🏦 Loan Default Risk Analytics & Predictive Modeling

## 📌 Project Overview

This project focuses on predicting loan default risk using customer demographic, financial, and employment-related information. The objective is to develop a machine learning-based decision support system that helps financial institutions identify high-risk borrowers and make data-driven lending decisions.

The project follows a complete data analytics workflow including data preprocessing, exploratory data analysis (EDA), predictive modeling, model evaluation, feature importance analysis, and business recommendations.

By combining statistical analysis with machine learning techniques, this project demonstrates how predictive analytics can be applied to real-world banking and credit risk management problems.

<img width="1407" height="792" alt="image" src="https://github.com/user-attachments/assets/f062914d-4dbb-409f-8e1d-6dbe0226c883" />


---

# 🎯 Business Problem

Loan defaults can significantly impact the profitability and stability of financial institutions.

Traditional credit assessment methods often fail to capture complex patterns hidden within borrower data.

The goal of this project is to:

* Identify factors associated with loan default risk.
* Build predictive models to classify borrowers as defaulters or non-defaulters.
* Improve lending decisions using data-driven insights.
* Support risk management and portfolio optimization.

---

# 🎯 Project Objectives

The analysis was designed to answer the following business questions:

* Which customer characteristics are associated with loan default?
* What are the most important predictors of loan default risk?
* Can machine learning models accurately identify high-risk borrowers?
* Which model provides the best predictive performance?
* How can predictive analytics improve lending decisions?

---

# 📂 Dataset Information

### Dataset

Loan Default Dataset

### Target Variable

**Default**

* 0 = Non-Default
* 1 = Default

### Key Features

| Feature        | Description               |
| -------------- | ------------------------- |
| Age            | Borrower age              |
| Income         | Annual income             |
| LoanAmount     | Amount borrowed           |
| CreditScore    | Creditworthiness score    |
| MonthsEmployed | Employment duration       |
| InterestRate   | Loan interest rate        |
| LoanTerm       | Loan duration             |
| DTIRatio       | Debt-to-Income Ratio      |
| Education      | Educational qualification |
| EmploymentType | Employment category       |
| MaritalStatus  | Marital status            |
| LoanPurpose    | Purpose of loan           |

---

# 🛠 Technology Stack

### Programming Language

* Python

### Libraries

* Pandas
* NumPy
* Matplotlib
* Seaborn
* Scikit-Learn

### Environment

* Jupyter Notebook

---

# 📊 Exploratory Data Analysis (EDA)

The dataset was analyzed using various statistical and visualization techniques.

### Analysis Performed

✔ Missing Value Analysis

✔ Duplicate Record Detection

✔ Target Variable Distribution

✔ Univariate Analysis

✔ Bivariate Analysis

✔ Correlation Analysis

✔ Categorical Risk Analysis

✔ Feature Relationship Exploration

### Key Visualizations

* Loan Default Distribution
* Histograms
* Boxplots
* Countplots
* Correlation Heatmap
* Scatterplots

---

# 🤖 Machine Learning Models

Three classification models were developed and evaluated.

## 1. Logistic Regression

A baseline classification model used to estimate the probability of loan default.

### Strengths

* Interpretable
* Fast
* Widely used in banking

---

## 2. Decision Tree

A tree-based model capable of capturing non-linear relationships.

### Strengths

* Easy to interpret
* Handles complex interactions
* Useful for decision support

---

## 3. Random Forest

An ensemble learning model that combines multiple decision trees.

### Strengths

* High predictive performance
* Reduced overfitting
* Robust and reliable

---

# 📈 Model Evaluation

The models were evaluated using:

* Accuracy
* Precision
* Recall
* F1-Score
* Confusion Matrix
* ROC-AUC Score

### Evaluation Process

✔ Train-Test Split

✔ Classification Report

✔ Confusion Matrix Analysis

✔ ROC Curve Analysis

✔ Model Comparison

---

# 🏆 Best Model Selection

Among the evaluated models, **Random Forest** delivered the strongest overall predictive performance and demonstrated superior capability in identifying patterns associated with loan default risk.

Reasons:

* Better generalization performance
* Reduced overfitting
* Strong classification capability
* Effective handling of complex relationships

---

# 🔍 Feature Importance Analysis

Feature importance analysis was performed using the Random Forest model.

### Top Risk Drivers Identified

* Income
* Interest Rate
* Loan Amount
* Age
* Credit Score
* Months Employed
* Debt-to-Income Ratio
* Loan Term

These variables contributed most significantly to loan default prediction.

---

# 📉 ROC-AUC Analysis

ROC-AUC was used to evaluate the model's ability to distinguish between default and non-default borrowers.

### Business Importance

A higher ROC-AUC score indicates stronger discrimination capability and greater confidence in lending decisions.

This metric is particularly important in banking and credit risk analytics because it evaluates predictive performance across multiple classification thresholds.

---

# 💡 Key Business Findings

The analysis revealed several important insights:

* Income was the strongest predictor of loan default risk.
* Higher interest rates were associated with increased default probability.
* Larger loan amounts contributed to greater lending risk.
* Credit Score remained a critical indicator of borrower reliability.
* Debt-to-Income Ratio influenced repayment behavior.
* Employment duration played an important role in risk assessment.
* Random Forest provided the strongest predictive performance among all evaluated models.

---

# 📌 Strategic Recommendations

### Recommendation 1

Implement risk-based lending strategies using predictive risk scores.

### Recommendation 2

Apply additional verification procedures for high-risk applicants.

### Recommendation 3

Monitor borrowers with elevated debt-to-income ratios.

### Recommendation 4

Incorporate predictive analytics into loan approval workflows.

### Recommendation 5

Continuously monitor portfolio risk using machine learning-based early warning systems.

---

# 📁 Project Structure

Loan-Default-Risk-Analytics/

├── Loan_default.csv

├── Loan_Default_Risk_Analytics.ipynb

├── README.md

├── requirements.txt

├── screenshots/

│ ├── Loan_Default_Distribution.png

│ ├── Correlation_Heatmap.png

│ ├── Model_Comparison.png

│ ├── Feature_Importance.png

│ ├── ROC_Curve.png

│ └── RandomForest_ConfusionMatrix.png

---

# 🎯 Project Outcomes

This project demonstrates:

✔ Exploratory Data Analysis

✔ Statistical Thinking

✔ Predictive Analytics

✔ Machine Learning

✔ Credit Risk Modeling

✔ Banking Analytics

✔ Model Evaluation

✔ Feature Importance Analysis

✔ Business Intelligence

✔ Decision Support Systems

---

# 👨‍💻 Author

**K. Durga Nageswararao**

M.Sc. Statistics

Aspiring Data Analyst | Business Intelligence Analyst | Machine Learning Enthusiast

### Skills

Python • SQL • Power BI • Statistics • Machine Learning • Data Visualization

### GitHub

https://github.com/Nageswararaokakarapathi

### LinkedIn

https://www.linkedin.com/in/durganageswararao

---

⭐ If you found this project useful, consider giving the repository a star.
