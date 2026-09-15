export type Project = {
  name: string;
  description: string;
  stack: string[];
  highlights: string[];
  index: string;
  githubUrl?: string;
};

export const featuredProjects: Project[] = [
  {
    name: 'RiskLens',
    description:
      'Prioritizes vulnerabilities by exploitation risk instead of severity score alone.',
    stack: ['Python', 'BigQuery', 'SHAP', 'Cloud Run', 'NVD / CISA / EPSS'],
    highlights: [
      'Combines multiple vulnerability-intelligence sources',
      'Uses time-aware features to reduce leakage',
      'Adds explainability for security decision-making',
    ],
    index: '01',
  },
  {
    name: 'Avocado & Tomato Price Forecasting',
    description:
      'Forecasts monthly Canadian produce prices using market and external signals.',
    stack: ['Python', 'Airflow', 'XGBoost', 'SARIMA / SARIMAX', 'pandas'],
    highlights: [
      'Built Bronze / Silver / Gold data layers',
      'Compared statistical and ML forecasting approaches',
      'Added imports, FX, fuel, CPI and weather signals',
    ],
    index: '02',
    githubUrl: 'https://github.com/ishmeet2001/price_prediction',
  },
  {
    name: 'AI Document Processing',
    description:
      'Turns messy invoice text into validated structured records and relational data.',
    stack: ['Python', 'LangChain', 'Gemini', 'Pydantic', 'SQLite', 'pytest'],
    highlights: [
      'Structured extraction with schema validation',
      'Tool calling with retry and failure handling',
      'Automated tests for extraction and database logic',
    ],
    index: '03',
    githubUrl: 'https://github.com/ishmeet2001/AI-Document-Processing-Pipeline',
  },
  {
    name: 'Multi-State Crime Analysis',
    description:
      'Harmonizes large public-safety datasets across five U.S. states for analysis.',
    stack: ['Python', 'pandas', 'ETL', 'Data Quality', 'Analytics'],
    highlights: [
      'Processed roughly 1.45 GB of raw incident data',
      'Standardized inconsistent state-level schemas',
      'Produced reusable county-month analytical outputs',
    ],
    index: '04',
    githubUrl: 'https://github.com/ishmeet2001/U.S.-Multi-State-Violent-Crime-Analysis',
  },
  {
    name: 'Retail Analytics Pipeline',
    description:
      'End-to-end analytics engineering pipeline for 541,909 retail transactions.',
    stack: ['Azure Data Factory', 'BigQuery', 'dbt', 'Soda', 'Looker Studio'],
    highlights: [
      'Built staged ingestion and warehouse transformations',
      'Added automated data-quality checks',
      'Published dimensional marts and executive reporting',
    ],
    index: '05',
    githubUrl: 'https://github.com/ishmeet2001/retail-analytics-pipeline',
  },
  {
    name: 'TeraBite',
    description:
      'Datathon analysis exploring staple-food import resilience and business risk.',
    stack: ['Python', 'pandas', 'Analytics', 'Visualization'],
    highlights: [
      'Translated trade data into a business resilience question',
      'Compared exposure across staple-food categories',
      'Focused the final story on decision-useful findings',
    ],
    index: '06',
  },
];
