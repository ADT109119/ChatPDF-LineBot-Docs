import{_ as n,c as o,a,b as e,d as i,w as r,e as t,r as s,o as c}from"./app-D1LxNvsK.js";const l={},_=t('<h1 id="environment-variables-and-settings" tabindex="-1"><a class="header-anchor" href="#environment-variables-and-settings"><span>Environment Variables and Settings</span></a></h1><h2 id="environment-variables-list" tabindex="-1"><a class="header-anchor" href="#environment-variables-list"><span>Environment Variables List</span></a></h2><p><span style="color:red;">*</span> means required</p><table><thead><tr><th>Variable</th><th>Description</th><th>Default Value</th></tr></thead><tbody><tr><td><code>MODEL_NAME</code></td><td>Model names used for Q&amp;A, multiple models separated by <code>|</code></td><td><code>llama3-8b-8192|gpt-3.5-turbo|gpt-4-1106-preview</code></td></tr><tr><td><code>BASE_URL</code></td><td>Base URLs for the corresponding models&#39; API, multiple URLs separated by <code>|</code></td><td><code>https://api.groq.com/openai/v1|https://api.openai.com/v1|https://api.openai.com/v1</code></td></tr><tr><td><span style="color:red;">*</span> <code>API_KEY</code></td><td>API keys for the corresponding models, multiple keys separated by <code>|</code></td><td><code>API_KEY_1|API_KEY_2|API_KEY_3</code></td></tr><tr><td><code>MAX_CHAT_HISTORY</code></td><td>Maximum number of chat histories to retain</td><td><code>5</code></td></tr><tr><td><code>EMBEDDING_MODEL</code></td><td>Model name used for text embedding (please provide the HF model path)</td><td><code>sentence-transformers/all-MiniLM-L6-v2</code></td></tr><tr><td><code>EMBEDDING_DEVICE</code></td><td>Device to run the text embedding model (cpu or cuda, e.g., cuda:0, cuda:1)</td><td><code>cpu</code></td></tr><tr><td><span style="color:red;">*</span> <code>LINE_CHANNEL_ACCESS_TOKEN</code></td><td>Line Bot access token</td><td><code>YOUR_LINE_CHANNEL_ACCESS_TOKEN</code></td></tr><tr><td><span style="color:red;">*</span> <code>LINE_CHANNEL_SECRET</code></td><td>Line Bot secret</td><td><code>YOUR_LINE_CHANNEL_SECRET</code></td></tr><tr><td><span style="color:red;">*</span> <code>LINE_LIFF_ID</code></td><td>Line LIFF page ID</td><td><code>YOUR_LINE_LIFF_ID</code></td></tr><tr><td><span style="color:red;">*</span> <code>LINE_LOGIN_CHANNEL_ID</code></td><td>Line Login Channel ID for the LIFF page</td><td><code>YOUR_LINE_LOGIN_CHANNEL_ID</code></td></tr><tr><td><code>FILE_MAX_SIZE</code></td><td>Maximum upload file size allowed</td><td><code>5MB</code></td></tr><tr><td><code>SPACE_PER_USER</code></td><td>Maximum space available per user</td><td><code>200MB</code></td></tr><tr><td><code>ALLOW_FILE_TYPE</code></td><td>Allowed file types for upload, multiple types separated by <code>,</code></td><td><code>pdf,csv,txt</code></td></tr></tbody></table><h2 id="configuration-methods" tabindex="-1"><a class="header-anchor" href="#configuration-methods"><span>Configuration Methods</span></a></h2><h3 id="server-or-docker-configuration" tabindex="-1"><a class="header-anchor" href="#server-or-docker-configuration"><span>Server or Docker Configuration</span></a></h3>',6),v=t(`<h3 id="local-configuration" tabindex="-1"><a class="header-anchor" href="#local-configuration"><span>Local Configuration</span></a></h3><ol><li>Copy the <code>.env.example</code> file and rename it to <code>.env</code>. Alternatively, create a <code>.env</code> file and paste the following content:</li></ol><div class="language-env line-numbers-mode" data-ext="env" data-title="env"><pre class="language-env"><code>MODEL_NAME=llama3-8b-8192|gpt-3.5-turbo|gpt-4-1106-preview
BASE_URL=https://api.groq.com/openai/v1|https://api.openai.com/v1|https://api.openai.com/v1
API_KEY=API_KEY_1|API_KEY_2|API_KEY_3

MAX_CHAT_HISTORY=5
EMBEDDING_MODEL=&quot;sentence-transformers/all-MiniLM-L6-v2&quot;
EMBEDDING_DEVICE=&quot;cpu&quot;

LINE_CHANNEL_ACCESS_TOKEN=YOUR_LINE_CHANNEL_ACCESS_TOKEN
LINE_CHANNEL_SECRET=YOUR_LINE_CHANNEL_SECRET
LINE_LIFF_ID=YOUR_LINE_LIFF_ID
LINE_LOGIN_CHANNEL_ID=YOUR_LINE_LOGIN_CLIENT_ID

FILE_MAX_SIZE=5MB
SPACE_PER_USER=200MB

ALLOW_FILE_TYPE=pdf,csv,txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Set the API keys, model parameters, and other settings.</li></ol>`,4);function p(m,E){const d=s("RouteLink");return c(),o("div",null,[_,a("p",null,[e("You can set environment variables directly on the server or Docker. Refer to the "),i(d,{to:"/en/installation.html"},{default:r(()=>[e("Installation Guide")]),_:1}),e(" for details.")]),v])}const h=n(l,[["render",p],["__file","configuration.html.vue"]]),L=JSON.parse('{"path":"/en/configuration.html","title":"Environment Variables and Settings","lang":"en-US","frontmatter":{"title":"Environment Variables and Settings","lang":"en-US","description":"text"},"headers":[{"level":2,"title":"Environment Variables List","slug":"environment-variables-list","link":"#environment-variables-list","children":[]},{"level":2,"title":"Configuration Methods","slug":"configuration-methods","link":"#configuration-methods","children":[{"level":3,"title":"Server or Docker Configuration","slug":"server-or-docker-configuration","link":"#server-or-docker-configuration","children":[]},{"level":3,"title":"Local Configuration","slug":"local-configuration","link":"#local-configuration","children":[]}]}],"git":{"updatedTime":1716794247000,"contributors":[{"name":"ADT109119","email":"2.jerry32262686@gmail.com","commits":1}]},"filePathRelative":"en/configuration.md"}');export{h as comp,L as data};
