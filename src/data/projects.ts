export type Project = {
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  imageSource?: string;
  index: string;
  tone: 'clay' | 'sage' | 'sand' | 'ink' | 'rose' | 'ochre';
};

export const featuredProjects: Project[] = [
  {
    name: 'RiskLens',
    description:
      'Exploitation-aware vulnerability prioritization using multiple vulnerability sources, time-aware feature engineering, ML ranking and classification, explainability, and API/cloud deployment.',
    image: '/images/projects/risklens-placeholder.jpg',
    imageAlt: 'RiskLens project visual placeholder',
    index: '01',
    tone: 'clay',
  },
  {
    name: 'Grocery Price Forecasting',
    description:
      'Monthly Canadian avocado and tomato forecasting using historical prices, imports, exchange rates, fuel/oil, CPI, and weather, with Bronze/Silver/Gold processing and Airflow automation.',
    image:
      'https://raw.githubusercontent.com/ishmeet2001/price_prediction/main/price_prediction/model/output/avocado/xgboost/xgboost_vs_actual.png',
    imageAlt: 'Avocado XGBoost models compared with actual values',
    imageSource:
      'ishmeet2001/price_prediction — price_prediction/model/output/avocado/xgboost/xgboost_vs_actual.png',
    index: '02',
    tone: 'sage',
  },
  {
    name: 'AI Document Processing',
    description:
      'Python workflow using LLM tool calling, Pydantic structured outputs, validation, SQLite persistence, retries, and automated tests.',
    image: '/images/projects/ai-document-processing-placeholder.jpg',
    imageAlt: 'AI Document Processing project visual placeholder',
    index: '03',
    tone: 'sand',
  },
  {
    name: 'Multi-State Crime Analysis',
    description:
      'ETL and analytics project harmonizing FBI/NIBRS-style crime datasets across five U.S. states from 2020–2024.',
    image: '/images/projects/multi-state-crime-analysis-placeholder.jpg',
    imageAlt: 'Multi-State Crime Analysis project visual placeholder',
    index: '04',
    tone: 'ink',
  },
  {
    name: 'Retail Analytics Pipeline',
    description:
      '541,909 retail transactions processed through Azure Blob, ADF, Python, BigQuery, dbt, Soda quality checks, and Looker Studio reporting.',
    image: 'https://raw.githubusercontent.com/ishmeet2001/retail-analytics-pipeline/main/screenshots/dashboard.png',
    imageAlt: 'Retail Analytics Executive Dashboard',
    imageSource:
      'ishmeet2001/retail-analytics-pipeline — screenshots/dashboard.png',
    index: '05',
    tone: 'rose',
  },
  {
    name: 'TeraBite',
    description:
      'Women in Data datathon project focused on staple-food import resilience and business-oriented analysis.',
    image: '/images/projects/terabite-placeholder.jpg',
    imageAlt: 'TeraBite project visual placeholder',
    index: '06',
    tone: 'ochre',
  },
];
