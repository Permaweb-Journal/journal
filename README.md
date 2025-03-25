# Permaweb Journal

Welcome to [Permaweb Journal](https://permaweb-journal.arweave.net/), an onchain publication covering the Arweave and AO ecosystems. We cover ecosystem developments, projects, and insights, ensuring that information is permanently stored and accessible on the permaweb.

## Repository Overview

This repository powers the Permaweb Journal website, built using [Quartz](https://quartz.jzhao.xyz/), a lightweight static site generator for publishing Markdown-based content.

### Directory Structure

- `/content` – Markdown files for site pages, articles and references.
- `/quartz` - static site generator (full docs here)
- `/quartz/static` - Assets like images and logos.
- `/scripts` – Automation scripts for publishing on the permaweb.

## Running Locally

To set up and run Permaweb Journal locally, follow these steps:

### Prerequisites

Quartz requires **at least [Node](https://nodejs.org/) v20** and `npm` v9.3.1 to function correctly. Ensure you have this installed on your machine before continuing.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/afisher3578/permaweb-journal.git
   cd permaweb-journal
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the local server:
   ```sh
   npx quartz build --serve
   ```
   The site will be available at `http://localhost:8080`.

## Contributing

We welcome contributions to improve Permaweb Journal. You can submit **projects**, **articles**, **feature requests**, or **bug reports**.

### 1. Submitting a Project

To add a project to the Permaweb Journal ecosystem list:

- Open an [issue](https://github.com/your-org/permaweb-journal/issues) using the **Project Request** template.
- Provide details like the project name, description, category, and relevant links.

### 2. Contributing Pages

- Fork the repository and create a new Markdown file under `/content/articles` or `/content/reference`
- Follow the existing article structure.
- Open a **pull request (PR)** with a brief summary of your page.

### 3. Feature Requests

- Open an [issue](https://github.com/your-org/permaweb-journal/issues) with the **Feature Request** template.
- Clearly describe the feature and its benefits.

### 4. Reporting Bugs

- Open an [issue](https://github.com/your-org/permaweb-journal/issues) with the **Bug Report** template.
- Provide steps to reproduce the issue and expected behavior.

---

For questions about Permaweb Journal or about guest posting [DM Alex on X](https://x.com/afmedia_) .
