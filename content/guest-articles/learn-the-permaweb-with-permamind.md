## Learn the Permaweb with Permamind \[Guest Post\]

Jul 08, 20254 min read

![Permamind Header](https://permaweb-journal.arweave.net/static/images/permamind-header.png)

## Introduction

- **What is Permamind?**
  - While Permamind is the world’s first permanent, decentralized AI memory system built on Arweave and AO, this guide focuses on its power as your personal, always-current documentation assistant for the Permaweb ecosystem
  - It’s pre-loaded with the latest official documentation (`AO Cookbook`, `HyperBEAM`, etc.) and acts as an informed LLM that can answer complex technical questions accurately
  - Think of it as having a Permaweb expert available 24/7 who never gives outdated or hallucinated answers
- **What This Guide Covers**
  - This post will walk you through the entire setup process, from installing the server to connecting your favorite AI client and running your first query
  - We will provide specific instructions for **Claude Desktop**, **Cursor**, and **Raycast**
- **Why This Matters**
  - Instead of digging through multiple docs or getting generic/outdated responses from standard LLMs, you’ll have instant access to accurate, current information about the Permaweb tech stack
  - Perfect for developers building on AO, learning the Permaweb, or beginning their journey with HyperBEAM

## Part 1: Installing the Permamind Server

### Prerequisites

- You’ll need `Node.js` version 20 or higher. You can check your version by running:

  ```bash
  node -v
  ```

### Installation Steps

- To install permamind, open your terminal and use npm to install the Permamind package globally.

  ```bash
  npm i -g permamind
  ```

## **Part 2: Connecting Your AI Client**

Now that your local Permamind server is running, let’s connect it to your AI-powered development tool.

### Claude Desktop

1.  **Locate your Claude Desktop config file**:

    - **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
    - **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

2.  **Add the Permamind server configuration**: Open the config file and add the following MCP server configuration:

    ```json
    {
      "mcpServers": {
        "Permamind": {
          "command": "npx",
          "args": ["permamind"]
        }
      }
    }
    ```

3.  **Restart Claude Desktop** for the changes to take effect.
4.  **Verify the connection**: You should see the Permamind server listed in your available tools/servers within Claude Desktop.

### Cursor

1.  Open your Cursor editor.
2.  Go to `Cursor Settings` > `Tools & Integrations`.
3.  Click `New MCP server`.
4.  Add the following configuration:

    ```json
    {
      "mcpServers": {
        "Permamind": {
          "command": "npx",
          "args": ["permamind"]
        }
      }
    }
    ```

5.  Save the configuration and restart Cursor for the changes to take effect.

### Raycast

1.  Open Raycast and search for “MCP” or navigate to AI settings.
2.  Search for **Install MCP Server**.
3.  Fill in the configuration form:

    | Field           | Value                             |
    | --------------- | --------------------------------- |
    | **Transport**   | Select `Standard Input/Output`    |
    | **Command**     | Enter `npx`                       |
    | **Arguments**   | Enter `permamind`                 |
    | **Description** | Custom description of this server |

4.  **Cmd** + **Return** to install the server.
5.  Invoke the MCP server using `@permamind <Your query here>`

## Part 3: A Sample Run

Let’s confirm everything is working. The Permamind server you’re running has been pre-configured with the latest documentation for AO, the Permaweb Cookbook, HyperBEAM, and more.

### The Prompt

In your configured client (Claude, Cursor, or Raycast), start a new chat and ask a question that requires knowledge of the AO ecosystem.

**For example**:

- What is HyperBEAM?
- How can I expose my AO process to HyperBEAM?
- How can I use AR.IO’s Wayfinder SDK?

### Expected Output

Your AI client should provide a detailed, accurate answer based on the official documentation. It won’t give a generic or hallucinated response because Permamind is feeding it the correct context.

**Example** ![Expose AO Process](https://hackmd.io/_uploads/SkIxNe9rel.png)

### How does it work?

Your client sent the prompt to your local Permamind server. The server identified the topic and used the integrated Permaweb docs to provide the LLM with the necessary information to form a correct response.

## **Conclusion & Next Steps**

Congratulations! You now have a personal, always-current permaweb assistant running locally. You’ve successfully installed the server, connected a client, and verified its ability to provide accurate, up-to-date answers using our ecosystem’s official documentation.

This is a huge boost to your development workflow, enabling you to learn, build, and debug with Permaweb technologies faster than ever - no more outdated answers or generic LLM responses when working with AO, HyperBEAM, or any part of the Permaweb.

Dylan Shade is a software developer at Forward Research. Follow Dylan on [X](https://x.com/dpshade22).

Jonathon Green is a software developer exploring the Arweave/AO ecosystem. Follow Jonathan on [X](https://x.com/ALLiDoizCode).

---

**Disclosure:** This is a guest post submitted by external contributors. The views expressed are their own and do not necessarily reflect those of Permaweb Journal.

---
