<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="_MyStore__Nextjs_15_Demo_App_0"></a>🛒 MyStore – Next.js 15 Demo App</h1>
<p class="has-line-data" data-line-start="2" data-line-end="4">A simple <strong>e-commerce demo application</strong> built with <strong>Next.js 15 (App Router)</strong> and <strong>NextAuth.js</strong>.<br>
It includes public pages, authentication, and a protected dashboard to manage products.</p>
<p class="has-line-data" data-line-start="5" data-line-end="6">🔗 <strong>Live Demo:</strong> <a href="https://my-store-chi-five.vercel.app/">my-store-chi-five.vercel.app</a></p>
<hr>
<h2 class="code-line" data-line-start=9 data-line-end=10 ><a id="_Features_9"></a>🚀 Features</h2>
<h3 class="code-line" data-line-start=11 data-line-end=12 ><a id="_Public_Pages_11"></a>✅ Public Pages</h3>
<ul>
<li class="has-line-data" data-line-start="12" data-line-end="15"><strong>Landing Page (<code>/</code>)</strong>
<ul>
<li class="has-line-data" data-line-start="13" data-line-end="14">Navbar, Hero section, Product Highlights, Footer</li>
<li class="has-line-data" data-line-start="14" data-line-end="15">Navigation to Login &amp; Products</li>
</ul>
</li>
<li class="has-line-data" data-line-start="15" data-line-end="18"><strong>Product List (<code>/products</code>)</strong>
<ul>
<li class="has-line-data" data-line-start="16" data-line-end="17">Displays product cards with name, description, and price</li>
<li class="has-line-data" data-line-start="17" data-line-end="18">“View Details” button for each product</li>
</ul>
</li>
<li class="has-line-data" data-line-start="18" data-line-end="21"><strong>Product Details (<code>/products/[id]</code>)</strong>
<ul>
<li class="has-line-data" data-line-start="19" data-line-end="21">Publicly accessible product information page</li>
</ul>
</li>
</ul>
<h3 class="code-line" data-line-start=21 data-line-end=22 ><a id="_Authentication_21"></a>🔒 Authentication</h3>
<ul>
<li class="has-line-data" data-line-start="22" data-line-end="27"><strong>Login (<code>/login</code>)</strong>
<ul>
<li class="has-line-data" data-line-start="23" data-line-end="24">Authentication using <strong>NextAuth.js</strong></li>
<li class="has-line-data" data-line-start="24" data-line-end="25">Social login (Google) or credentials login</li>
<li class="has-line-data" data-line-start="25" data-line-end="27">Redirects to <code>/products</code> after login</li>
</ul>
</li>
</ul>
<h3 class="code-line" data-line-start=27 data-line-end=28 ><a id="_Protected_Pages_27"></a>👨‍💻 Protected Pages</h3>
<ul>
<li class="has-line-data" data-line-start="28" data-line-end="34"><strong>Add Product (<code>/dashboard/add-product</code>)</strong>
<ul>
<li class="has-line-data" data-line-start="29" data-line-end="30">Accessible only when logged in</li>
<li class="has-line-data" data-line-start="30" data-line-end="31">Form to add new products</li>
<li class="has-line-data" data-line-start="31" data-line-end="32">Data stored via API Route Handlers</li>
<li class="has-line-data" data-line-start="32" data-line-end="34">Redirects unauthenticated users to <code>/login</code></li>
</ul>
</li>
</ul>
<h3 class="code-line" data-line-start=34 data-line-end=35 ><a id="_Enhancements_34"></a>✨ Enhancements</h3>
<ul>
<li class="has-line-data" data-line-start="35" data-line-end="36">Loading spinner on form submissions</li>
<li class="has-line-data" data-line-start="36" data-line-end="37">Toast message on successful product add</li>
<li class="has-line-data" data-line-start="37" data-line-end="39">Light/Dark theme toggle</li>
</ul>
<hr>
<h2 class="code-line" data-line-start=41 data-line-end=42 ><a id="_Tech_Stack_41"></a>🛠️ Tech Stack</h2>
<ul>
<li class="has-line-data" data-line-start="43" data-line-end="44"><strong>Next.js 15 (App Router)</strong></li>
<li class="has-line-data" data-line-start="44" data-line-end="45"><strong>NextAuth.js</strong> (Authentication)</li>
<li class="has-line-data" data-line-start="45" data-line-end="46"><strong>Tailwind CSS</strong> (Styling)</li>
<li class="has-line-data" data-line-start="46" data-line-end="47"><strong>Lucide Icons</strong> (Icons)</li>
<li class="has-line-data" data-line-start="47" data-line-end="49"><strong>Vercel</strong> (Deployment)</li>
</ul>
<hr>
<h2 class="code-line" data-line-start=51 data-line-end=52 ><a id="_Project_Structure_51"></a>📂 Project Structure</h2>
<p class="has-line-data" data-line-start="52" data-line-end="63">my-store/<br>
├── app/<br>
│ ├── api/ # Route Handlers (mock backend)<br>
│ ├── dashboard/<br>
│ │ └── add-product/ # Protected Add Product page<br>
│ ├── login/ # Authentication page<br>
│ ├── products/ # Products list + details<br>
│ └── page.jsx # Landing page<br>
├── components/ # Reusable UI components<br>
├── lib/ # NextAuth configuration &amp; helpers<br>
└── <a href="http://README.md">README.md</a></p>
<hr>
<h2 class="code-line" data-line-start=67 data-line-end=68 ><a id="_Getting_Started_67"></a>⚡ Getting Started</h2>
<h3 class="code-line" data-line-start=69 data-line-end=70 ><a id="1_Clone_Repository_69"></a>1. Clone Repository</h3>
<pre><code class="has-line-data" data-line-start="71" data-line-end="74" class="language-bash">git <span class="hljs-built_in">clone</span> https://github.com/your-username/my-store.git
<span class="hljs-built_in">cd</span> my-store
</code></pre>
<h3 class="code-line" data-line-start=76 data-line-end=77 ><a id="Install_Dependencies_76"></a>Install Dependencies</h3>
<pre><code class="has-line-data" data-line-start="79" data-line-end="81" class="language-bash">npm install
</code></pre>
<h3 class="code-line" data-line-start=81 data-line-end=82 ><a id="3_Configure_Environment_Variables_81"></a>3. Configure Environment Variables</h3>
<p class="has-line-data" data-line-start="82" data-line-end="83">Create a .env.local file in the project root:</p>
<pre><code class="has-line-data" data-line-start="84" data-line-end="89" class="language-bash">NEXTAUTH_SECRET=your-secret
NEXTAUTH_URL=http://localhost:<span class="hljs-number">3000</span>
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
</code></pre>
<h3 class="code-line" data-line-start=90 data-line-end=91 ><a id="4_Run_Locally_90"></a>4. Run Locally</h3>
<pre><code class="has-line-data" data-line-start="92" data-line-end="94" class="language-bash">npm run dev
</code></pre>
<p class="has-line-data" data-line-start="95" data-line-end="96">Visit <a href="http://localhost:3000">http://localhost:3000</a></p>
<h2 class="code-line" data-line-start=97 data-line-end=98 ><a id="Deployment_Vercel_97"></a>Deployment (Vercel)</h2>
<p class="has-line-data" data-line-start="98" data-line-end="102">Push your code to GitHub<br>
mport project on Vercel Dashboard<br>
Add environment variables in Vercel settings<br>
Deploy</p>