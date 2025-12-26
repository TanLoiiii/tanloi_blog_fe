export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  date: string;
  readTime: string;
  tags: string[];
  category: string;
  imageUrl: string;
  views: number;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Java: Ngôn ngữ lập trình bền vững cho doanh nghiệp",
    excerpt: "Khám phá tại sao Java vẫn là lựa chọn hàng đầu cho các hệ thống lớn, từ tính năng hướng đối tượng mạnh mẽ đến hệ sinh thái phong phú.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Java đã tồn tại hơn hai thập kỷ và vẫn là một trong những ngôn ngữ lập trình phổ biến nhất thế giới. 
          Với hơn 9 triệu lập trình viên toàn cầu và được sử dụng bởi 3 tỷ thiết bị, Java đã chứng minh được 
          sức sống bền bỉ của mình trong ngành công nghiệp phần mềm.
        </p>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">1. Độc lập nền tảng - "Write Once, Run Anywhere"</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Điểm mạnh lớn nhất của Java là khả năng chạy trên mọi thiết bị có cài đặt máy ảo Java (JVM). 
          Nguyên lý này được thực hiện thông qua quá trình biên dịch code Java thành bytecode, sau đó 
          JVM sẽ thông dịch bytecode này thành mã máy phù hợp với từng nền tảng.
        </p>

        <div class="bg-gray-50 border-l-4 border-primary p-6 my-6 rounded-r-lg">
          <p class="text-gray-800 font-medium mb-2">💡 Ví dụ thực tế:</p>
          <p class="text-gray-700">
            Bạn viết code trên Windows, build thành file .jar, sau đó có thể chạy ngay trên Linux, 
            macOS hoặc bất kỳ hệ điều hành nào có JVM mà không cần chỉnh sửa.
          </p>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">2. Lập trình hướng đối tượng (OOP)</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Java là ngôn ngữ thuần hướng đối tượng. Mọi thứ trong Java đều là Object (ngoại trừ các kiểu 
          dữ liệu nguyên thủy). Điều này giúp code dễ bảo trì, mở rộng và tái sử dụng.
        </p>

        <h3 class="text-2xl font-semibold mt-8 mb-4 text-slate-800">Bốn trụ cột của OOP trong Java:</h3>
        
        <ul class="space-y-4 mb-6">
          <li class="flex items-start">
            <span class="text-primary font-bold mr-3 text-xl">•</span>
            <div>
              <strong class="text-slate-900">Kế thừa (Inheritance):</strong>
              <p class="text-gray-700 mt-1">Cho phép class con kế thừa thuộc tính và phương thức từ class cha, 
              giúp tái sử dụng code và tránh lặp lại.</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-primary font-bold mr-3 text-xl">•</span>
            <div>
              <strong class="text-slate-900">Đóng gói (Encapsulation):</strong>
              <p class="text-gray-700 mt-1">Ẩn chi tiết triển khai và chỉ công khai interface cần thiết, 
              bảo vệ dữ liệu khỏi truy cập trái phép.</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-primary font-bold mr-3 text-xl">•</span>
            <div>
              <strong class="text-slate-900">Đa hình (Polymorphism):</strong>
              <p class="text-gray-700 mt-1">Một interface có thể có nhiều cách triển khai khác nhau, 
              tăng tính linh hoạt của code.</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-primary font-bold mr-3 text-xl">•</span>
            <div>
              <strong class="text-slate-900">Trừu tượng (Abstraction):</strong>
              <p class="text-gray-700 mt-1">Ẩn các chi tiết phức tạp và chỉ hiển thị các tính năng cần thiết 
              cho người dùng.</p>
            </div>
          </li>
        </ul>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">3. Hệ sinh thái và Framework phong phú</h2>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          Java sở hữu một trong những hệ sinh thái thư viện và framework lớn nhất trong thế giới lập trình:
        </p>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-bold text-lg text-primary mb-2">Spring Framework</h4>
            <p class="text-gray-700 text-sm">Framework số 1 cho phát triển enterprise applications, 
            microservices và REST APIs.</p>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-bold text-lg text-primary mb-2">Hibernate</h4>
            <p class="text-gray-700 text-sm">ORM framework mạnh mẽ giúp mapping object-relational 
            và làm việc hiệu quả với database.</p>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-bold text-lg text-primary mb-2">Maven/Gradle</h4>
            <p class="text-gray-700 text-sm">Build tools tự động hóa quá trình build, test và deploy 
            ứng dụng Java.</p>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-bold text-lg text-primary mb-2">Apache Kafka</h4>
            <p class="text-gray-700 text-sm">Platform xử lý streaming data real-time được viết bằng 
            Java và Scala.</p>
          </div>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">4. Đa luồng và Hiệu năng cao</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Java hỗ trợ lập trình đa luồng (Multithreading) ngay từ nhân của ngôn ngữ. Điều này cho phép 
          xử lý nhiều tác vụ đồng thời, tối ưu hóa hiệu năng cho:
        </p>

        <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li>Các ứng dụng xử lý dữ liệu lớn (Big Data)</li>
          <li>Hệ thống giao dịch thời gian thực (Trading systems)</li>
          <li>Game servers với hàng ngàn kết nối đồng thời</li>
          <li>Web applications có traffic cao</li>
        </ul>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">5. Bảo mật mạnh mẽ</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Java được thiết kế với bảo mật là ưu tiên hàng đầu:
        </p>

        <ul class="space-y-3 mb-6">
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span class="text-gray-700"><strong>Security Manager:</strong> Kiểm soát quyền truy cập tài nguyên hệ thống</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span class="text-gray-700"><strong>Bytecode Verification:</strong> Xác thực bytecode trước khi thực thi</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span class="text-gray-700"><strong>No Pointer Arithmetic:</strong> Tránh lỗi truy cập bộ nhớ trái phép</span>
          </li>
          <li class="flex items-start">
            <span class="text-primary mr-2">✓</span>
            <span class="text-gray-700"><strong>Automatic Memory Management:</strong> Garbage Collector tự động dọn dẹp bộ nhớ</span>
          </li>
        </ul>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <h3 class="font-bold text-blue-900 mb-2">📊 Thống kê thú vị về Java:</h3>
          <ul class="space-y-1 text-blue-800">
            <li>• Được sử dụng bởi 90% công ty Fortune 500</li>
            <li>• Hơn 3 tỷ thiết bị chạy Java</li>
            <li>• Ngôn ngữ phổ biến thứ 3 trên GitHub (2024)</li>
            <li>• Trung bình lương Java Developer: $85,000 - $120,000/năm (US)</li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">Kết luận</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Dù có sự cạnh tranh gay gắt từ Python, Go, Node.js hay Kotlin, Java vẫn giữ vững vị thế là 
          "xương sống" của hàng triệu hệ thống ngân hàng, thương mại điện tử, viễn thông và fintech 
          trên toàn cầu.
        </p>

        <p class="text-gray-700 leading-relaxed mb-4">
          Học Java không chỉ là học một ngôn ngữ lập trình, mà là học cách thiết kế hệ thống bền vững, 
          scalable và maintainable. Với sự phát triển liên tục qua các phiên bản mới (Java 17 LTS, Java 21 LTS), 
          Java vẫn đang tiếp tục đổi mới và thích ứng với xu hướng công nghệ hiện đại.
        </p>

        <div class="bg-gradient-to-r from-primary/10 to-blue-50 p-6 rounded-lg mt-8">
          <p class="text-gray-800 font-medium mb-2">🚀 Bắt đầu học Java ngay hôm nay!</p>
          <p class="text-gray-700 text-sm">
            Nếu bạn muốn trở thành một software engineer chuyên nghiệp với nền tảng vững chắc, 
            Java là lựa chọn tuyệt vời để bắt đầu hành trình của mình.
          </p>
        </div>
      </div>
    `,
    author: "Võ Tấn Lợi",
    authorAvatar: "/avata.jpg",
    date: "20/02/2025",
    readTime: "8 phút đọc",
    tags: ["Java", "Backend", "Spring Boot", "Programming", "OOP", "Enterprise"],
    category: "Technology",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    views: 1247
  }, 
  {
    id: 2,
    title: "JavaScript: Ngôn ngữ không thể thiếu của Web hiện đại",
    excerpt: "Từ client-side đến server-side, khám phá sức mạnh của JavaScript và lý do tại sao nó thống trị thế giới lập trình web trong suốt thập kỷ qua.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Nếu Java là "xương sống" của các hệ thống doanh nghiệp, thì JavaScript (JS) chính là "huyết mạch" của Internet. 
          Gần như mọi website bạn truy cập ngày nay đều sử dụng JavaScript để tạo ra các tương tác động, mượt mà và trực quan.
          Từ một ngôn ngữ script đơn giản, JS đã vươn mình trở thành một gã khổng lồ Full-stack.
        </p>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">1. Độc tôn trên trình duyệt (Browser)</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          JavaScript là ngôn ngữ duy nhất chạy native trên tất cả các trình duyệt web phổ biến mà không cần cài đặt thêm plugin. 
          Điều này tạo nên vị thế độc tôn của nó trong mảng Frontend Development.
        </p>

        <div class="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-6 rounded-r-lg">
          <p class="text-gray-800 font-medium mb-2">💡 Sự thật thú vị:</p>
          <p class="text-gray-700">
            Dù tên có vẻ giống nhau, nhưng <strong>JavaScript</strong> và <strong>Java</strong> hoàn toàn khác nhau về thiết kế và mục đích. 
            Người ta thường ví: "Java và JavaScript giống nhau như Car (xe hơi) và Carpet (tấm thảm) vậy".
          </p>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">2. Khả năng Full-stack với Node.js</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Trước năm 2009, JS chỉ chạy trên trình duyệt. Sự ra đời của <strong>Node.js</strong> đã thay đổi cuộc chơi, 
          cho phép JS chạy trên server-side. Giờ đây, một lập trình viên có thể dùng JS để viết cả Frontend, Backend và Database (MongoDB).
        </p>

        <h3 class="text-2xl font-semibold mt-8 mb-4 text-slate-800">Tại sao JS lại nhanh?</h3>
        
        <ul class="space-y-4 mb-6">
          <li class="flex items-start">
            <span class="text-yellow-500 font-bold mr-3 text-xl">•</span>
            <div>
              <strong class="text-slate-900">Non-blocking I/O:</strong>
              <p class="text-gray-700 mt-1">JS không "đứng chờ" một tác vụ nặng (như đọc file) hoàn thành, mà sẽ xử lý tác vụ tiếp theo ngay lập tức.</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-500 font-bold mr-3 text-xl">•</span>
            <div>
              <strong class="text-slate-900">Event Loop:</strong>
              <p class="text-gray-700 mt-1">Cơ chế quản lý hàng đợi thông minh giúp JS xử lý hàng ngàn kết nối đồng thời chỉ với một luồng đơn (Single Thread).</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-yellow-500 font-bold mr-3 text-xl">•</span>
            <div>
              <strong class="text-slate-900">JIT Compilation:</strong>
              <p class="text-gray-700 mt-1">Các engine như V8 (Google) tối ưu hóa mã JS thành mã máy cực nhanh trong thời gian thực.</p>
            </div>
          </li>
        </ul>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">3. Hệ sinh thái Framework bùng nổ</h2>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          Cộng đồng JS cực kỳ năng động, liên tục cho ra đời các thư viện và framework giúp tăng tốc độ phát triển:
        </p>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-bold text-lg text-slate-900 mb-2">React.js</h4>
            <p class="text-gray-700 text-sm">Thư viện UI phổ biến nhất thế giới do Facebook phát triển, tư duy theo hướng Component.</p>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-bold text-lg text-slate-900 mb-2">Next.js</h4>
            <p class="text-gray-700 text-sm">Framework dựa trên React, hỗ trợ Server-Side Rendering (SSR) tối ưu cho SEO.</p>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-bold text-lg text-slate-900 mb-2">Vue.js</h4>
            <p class="text-gray-700 text-sm">Dễ học, nhẹ nhàng nhưng mạnh mẽ, được cộng đồng yêu thích vì cú pháp rõ ràng.</p>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
            <h4 class="font-bold text-lg text-slate-900 mb-2">TypeScript</h4>
            <p class="text-gray-700 text-sm">"JavaScript with syntax for types". Giúp code an toàn hơn, dễ bảo trì hơn trong dự án lớn.</p>
          </div>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">4. ES6+ và sự hiện đại hóa</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          JavaScript ngày nay (Modern JS) đã khác xa so với quá khứ. Các chuẩn ECMAScript mới (ES6, ES2020...) mang đến cú pháp gọn gàng:
        </p>

        <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li><strong>Arrow Functions:</strong> Viết hàm ngắn gọn hơn.</li>
          <li><strong>Async/Await:</strong> Xử lý bất đồng bộ dễ đọc như code đồng bộ.</li>
          <li><strong>Destructuring:</strong> Trích xuất dữ liệu từ object/array nhanh chóng.</li>
          <li><strong>Modules:</strong> Quản lý code theo module chuyên nghiệp.</li>
        </ul>

        <div class="bg-blue-50 border-l-4 border-blue-500 p-6 my-8 rounded-r-lg">
          <h3 class="font-bold text-blue-900 mb-2">📊 Thống kê ấn tượng:</h3>
          <ul class="space-y-1 text-blue-800">
            <li>• Ngôn ngữ phổ biến nhất trên GitHub trong 10 năm liên tiếp</li>
            <li>• Hơn 1.8 triệu gói thư viện trên NPM</li>
            <li>• Được sử dụng bởi 98.7% các trang web trên toàn cầu</li>
            <li>• Lương trung bình Frontend Dev (JS): $100,000+/năm (US)</li>
          </ul>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">Kết luận</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Dù bạn muốn làm Frontend, Backend, Mobile App (React Native) hay thậm chí là Desktop App (Electron), 
          JavaScript đều đáp ứng được. Đây là ngôn ngữ linh hoạt nhất và là cánh cửa tốt nhất để bước chân vào ngành lập trình Web.
        </p>

        <div class="bg-gradient-to-r from-yellow-100 to-orange-50 p-6 rounded-lg mt-8">
          <p class="text-gray-800 font-medium mb-2">🚀 Lời khuyên cho người mới:</p>
          <p class="text-gray-700 text-sm">
            Hãy bắt đầu vững chắc với <strong>Vanilla JavaScript</strong> (JS thuần) trước khi nhảy vào các Framework như React hay Angular. 
            Nền tảng tốt sẽ giúp bạn đi xa hơn rất nhiều.
          </p>
        </div>
      </div>
    `,
    author: "Võ Tấn Lợi",
    authorAvatar: "/avata.jpg",
    date: "22/02/2025",
    readTime: "6 phút đọc",
    tags: ["JavaScript", "Frontend", "React", "Web Dev", "Node.js"],
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=1200&h=600&fit=crop",
    views: 2841
  }, 
  {
    id: 3,
    title: "Lập trình hướng đối tượng (OOP): 4 Trụ cột mọi Dev cần biết",
    excerpt: "OOP không chỉ là viết code, đó là một tư duy. Hiểu sâu về Đóng gói, Kế thừa, Đa hình và Trừu tượng để thiết kế phần mềm bền vững.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Khi mới bắt đầu học lập trình, chúng ta thường viết code theo lối "thủ tục" (procedural) - viết một loạt các lệnh từ trên xuống dưới. 
          Tuy nhiên, khi phần mềm lớn lên, cách làm này trở nên rối rắm. Đó là lúc <strong>Object-Oriented Programming (OOP)</strong> xuất hiện như một "vị cứu tinh".
        </p>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">Tư duy OOP là gì?</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Thay vì nhìn chương trình như một danh sách các "hàm" và "biến", OOP nhìn thế giới dưới dạng các <strong>Đối tượng (Objects)</strong> tương tác với nhau. 
          Giống như ngoài đời thực: Chiếc xe là một đối tượng, người lái là một đối tượng, và trạm xăng là một đối tượng.
        </p>

        <div class="grid md:grid-cols-2 gap-6 my-8">
            <div class="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 class="font-bold text-indigo-600 text-lg mb-2">Class (Lớp)</h4>
                <p class="text-gray-600 text-sm">Là bản vẽ thiết kế (Blueprint). Ví dụ: Bản vẽ kỹ thuật của một chiếc xe hơi Toyota.</p>
            </div>
            <div class="bg-gray-50 p-5 rounded-lg border border-gray-200">
                <h4 class="font-bold text-indigo-600 text-lg mb-2">Object (Đối tượng)</h4>
                <p class="text-gray-600 text-sm">Là thực thể cụ thể được tạo ra từ bản vẽ đó. Ví dụ: Chiếc xe Toyota Vios biển số 51G-123.45 ngoài đời thực.</p>
            </div>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">4 "Trụ cột" của OOP</h2>
        <p class="text-gray-700 mb-6">Để thành thạo OOP, bạn phải nắm vững 4 nguyên lý cốt lõi sau:</p>

        <div class="mb-10">
            <h3 class="text-2xl font-bold text-slate-800 flex items-center">
                <span class="bg-blue-100 text-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-xl mr-3">1</span>
                Đóng gói (Encapsulation)
            </h3>
            <p class="text-gray-700 mt-3 leading-relaxed">
                <strong>Ý tưởng:</strong> Giấu đi dữ liệu bên trong và chỉ cho phép truy cập qua các "cổng" (method) được kiểm soát. 
                Giống như viên thuốc con nhộng, bạn không biết (và không cần biết) bên trong bột thuốc trộn thế nào, bạn chỉ cần uống nó.
            </p>
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 text-gray-700 italic">
                "Dữ liệu của tôi, luật của tôi. Bạn không được sửa trực tiếp biến <code>balance</code> của tài khoản ngân hàng, bạn phải dùng hàm <code>withdraw()</code>."
            </div>
        </div>

        <div class="mb-10">
            <h3 class="text-2xl font-bold text-slate-800 flex items-center">
                <span class="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center text-xl mr-3">2</span>
                Kế thừa (Inheritance)
            </h3>
            <p class="text-gray-700 mt-3 leading-relaxed">
                <strong>Ý tưởng:</strong> Class con hưởng lại các đặc tính của Class cha. Giúp tránh viết lặp code (DRY - Don't Repeat Yourself).
            </p>
            <ul class="list-disc pl-14 mt-3 text-gray-700 space-y-2">
                <li>Class cha: <strong>Động Vật</strong> (có mắt, có chân, biết di chuyển).</li>
                <li>Class con: <strong>Chó</strong> (kế thừa tất cả cái trên + biết sủa, biết giữ nhà).</li>
                <li>Class con: <strong>Mèo</strong> (kế thừa tất cả cái trên + biết leo trèo).</li>
            </ul>
        </div>

        <div class="mb-10">
            <h3 class="text-2xl font-bold text-slate-800 flex items-center">
                <span class="bg-purple-100 text-purple-600 w-10 h-10 rounded-full flex items-center justify-center text-xl mr-3">3</span>
                Đa hình (Polymorphism)
            </h3>
            <p class="text-gray-700 mt-3 leading-relaxed">
                <strong>Ý tưởng:</strong> Cùng một hành động, nhưng mỗi đối tượng lại thực hiện theo cách khác nhau.
            </p>
            <div class="bg-purple-50 p-5 rounded-lg mt-4">
                <p class="font-medium text-purple-900 mb-2">Ví dụ hành động "Phát ra tiếng kêu":</p>
                <div class="space-y-2 text-gray-700">
                    <p>🐶 Đối tượng Chó -> "Gâu gâu"</p>
                    <p>🐱 Đối tượng Mèo -> "Meo meo"</p>
                    <p>🦆 Đối tượng Vịt -> "Cạp cạp"</p>
                </div>
                <p class="text-sm text-gray-500 mt-3">-> Người lập trình chỉ cần gọi lệnh <code>keu()</code>, không cần quan tâm đó là con gì.</p>
            </div>
        </div>

        <div class="mb-10">
            <h3 class="text-2xl font-bold text-slate-800 flex items-center">
                <span class="bg-orange-100 text-orange-600 w-10 h-10 rounded-full flex items-center justify-center text-xl mr-3">4</span>
                Trừu tượng (Abstraction)
            </h3>
            <p class="text-gray-700 mt-3 leading-relaxed">
                <strong>Ý tưởng:</strong> Ẩn đi sự phức tạp bên dưới, chỉ hiển thị những gì người dùng cần thiết để tương tác.
            </p>
            <p class="text-gray-700 mt-2">
                Khi lái xe ô tô, bạn chỉ cần biết đạp chân ga là xe chạy. Bạn <strong>không cần biết</strong> hệ thống phun xăng điện tử hay trục cam hoạt động thế nào bên trong động cơ.
            </p>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">Tại sao OOP quan trọng?</h2>
        
        <div class="grid md:grid-cols-3 gap-4 mb-8">
             <div class="bg-white p-4 shadow-sm rounded border border-gray-100">
                <div class="text-primary font-bold text-xl mb-2">🛠 Dễ bảo trì</div>
                <p class="text-gray-600 text-sm">Lỗi ở đâu sửa ở object đó, không ảnh hưởng toàn bộ hệ thống.</p>
             </div>
             <div class="bg-white p-4 shadow-sm rounded border border-gray-100">
                <div class="text-primary font-bold text-xl mb-2">♻️ Tái sử dụng</div>
                <p class="text-gray-600 text-sm">Viết một lần, dùng lại ở nhiều nơi thông qua Kế thừa.</p>
             </div>
             <div class="bg-white p-4 shadow-sm rounded border border-gray-100">
                <div class="text-primary font-bold text-xl mb-2">📈 Mở rộng</div>
                <p class="text-gray-600 text-sm">Dễ dàng thêm tính năng mới mà không phải đập đi xây lại code cũ.</p>
             </div>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">Kết luận</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          OOP không phải là cách duy nhất để lập trình (còn có Functional Programming), nhưng nó là tiêu chuẩn công nghiệp cho các hệ thống lớn. 
          Các ngôn ngữ như Java, C#, C++, Python hay thậm chí TypeScript đều xây dựng dựa trên tư duy này.
        </p>

        <div class="bg-slate-800 text-white p-6 rounded-lg mt-8 text-center">
          <p class="font-medium text-lg mb-2">"Code xấu thì chức năng vẫn chạy, nhưng code OOP tốt thì đồng nghiệp sẽ yêu quý bạn."</p>
        </div>
      </div>
    `,
    author: "Võ Tấn Lợi",
    authorAvatar: "/avata.jpg",
    date: "25/02/2025",
    readTime: "10 phút đọc",
    tags: ["OOP", "Concept", "Architecture", "Beginner", "Theory"],
    category: "Academic",
    imageUrl: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=1200&h=600&fit=crop",
    views: 892
  },
  {
    id: 4,
    title: "Lập trình mạng: Cốt lõi của giao tiếp dữ liệu",
    excerpt: "Internet hoạt động như thế nào? Tìm hiểu về Client-Server, Socket, TCP/UDP và cách các ứng dụng 'nói chuyện' với nhau qua mạng.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Chúng ta lướt Web, gửi tin nhắn Zalo, hay xem Netflix hàng ngày, nhưng ít ai để ý đến "phép màu" đang diễn ra bên dưới: <strong>Lập trình mạng (Network Programming)</strong>.
          Về cơ bản, đó là việc viết code để hai hoặc nhiều thiết bị có thể trao đổi dữ liệu với nhau, dù chúng đang ở cạnh nhau hay cách nhau nửa vòng trái đất.
        </p>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">1. Mô hình Client - Server</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Đây là kiến trúc phổ biến nhất trong lập trình mạng. Hãy tưởng tượng một nhà hàng:
        </p>

        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm my-6">
          <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
             <div class="flex-1">
                <div class="font-bold text-blue-600 text-xl mb-1">🧑‍💻 Client (Khách hàng)</div>
                <p class="text-sm text-gray-600">Là người gọi món. Client gửi yêu cầu (Request) và chờ đợi phục vụ.</p>
                <p class="text-xs text-gray-400 mt-1">(Trình duyệt, Mobile App)</p>
             </div>
             <div class="text-2xl text-gray-400">⇌</div>
             <div class="flex-1">
                <div class="font-bold text-green-600 text-xl mb-1">🖥️ Server (Nhà bếp)</div>
                <p class="text-sm text-gray-600">Là nơi chế biến. Server nhận yêu cầu, xử lý và trả kết quả (Response).</p>
                <p class="text-xs text-gray-400 mt-1">(Web Server, Database)</p>
             </div>
          </div>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">2. Giao thức: Ngôn ngữ chung</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Để hiểu nhau, máy tính cần một bộ quy tắc chung gọi là <strong>Protocol</strong>. Hai "người khổng lồ" quan trọng nhất mà bạn phải biết là TCP và UDP.
        </p>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-blue-50 p-5 rounded-lg border-t-4 border-blue-500">
            <h3 class="font-bold text-xl text-blue-800 mb-3">TCP (Transmission Control Protocol)</h3>
            <p class="text-gray-700 text-sm mb-3">
              <strong>Đặc điểm:</strong> Tin cậy, đảm bảo dữ liệu đến nơi đầy đủ và đúng thứ tự. Có cơ chế bắt tay 3 bước (3-way handshake).
            </p>
            <p class="text-gray-700 text-sm">
              <strong>Ví dụ:</strong> Tải file, lướt web (HTTP), gửi email. (Bạn không muốn tải file về mà bị mất một đoạn dữ liệu).
            </p>
          </div>

          <div class="bg-orange-50 p-5 rounded-lg border-t-4 border-orange-500">
            <h3 class="font-bold text-xl text-orange-800 mb-3">UDP (User Datagram Protocol)</h3>
            <p class="text-gray-700 text-sm mb-3">
              <strong>Đặc điểm:</strong> Nhanh, nhẹ, nhưng không đảm bảo. Gửi đi là xong, không quan tâm bên kia nhận được chưa.
            </p>
            <p class="text-gray-700 text-sm">
              <strong>Ví dụ:</strong> Livestream, Game Online, Gọi video. (Mất một vài khung hình cũng không sao, miễn là tốc độ nhanh).
            </p>
          </div>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">3. Socket: Cánh cửa kết nối</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Trong code, để thực hiện kết nối mạng, chúng ta dùng <strong>Socket</strong>. Socket giống như cái ổ cắm điện, là điểm cuối (endpoint) của một liên kết truyền thông hai chiều.
        </p>

        <div class="bg-gray-800 text-gray-200 p-4 rounded-lg font-mono text-sm my-4 overflow-x-auto">
          <p class="text-green-400">// Ví dụ tư duy Socket (Pseudocode)</p>
          <p class="mt-2"><span class="text-purple-400">Server</span> s = new <span class="text-yellow-400">ServerSocket</span>(8080);</p>
          <p>s.listen(); <span class="text-gray-500">// Server ngồi nghe ở cổng 8080</span></p>
          <p class="mt-2"><span class="text-blue-400">Client</span> c = new <span class="text-yellow-400">Socket</span>("127.0.0.1", 8080);</p>
          <p>c.connect(); <span class="text-gray-500">// Client gõ cửa</span></p>
          <p class="mt-2"><span class="text-purple-400">Connection</span> conn = s.accept(); <span class="text-gray-500">// Server mở cửa, kết nối thiết lập!</span></p>
        </div>
        
        <p class="text-gray-700 mt-2 text-sm italic">
          *Mỗi ứng dụng trên máy tính sẽ chạy ở một "Cổng" (Port) khác nhau để không dẫm chân lên nhau. Ví dụ: Web chạy port 80, Database chạy port 3306.
        </p>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">4. Xu hướng hiện đại</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Ngày nay, lập trình viên ít khi phải làm việc trực tiếp với Raw Socket (trừ khi làm hệ thống nhúng hoặc core system). 
          Chúng ta thường dùng các thư viện cấp cao hơn:
        </p>

        <ul class="space-y-3 mb-6">
          <li class="flex items-start">
            <span class="text-teal-600 font-bold mr-2">➜</span>
            <span class="text-gray-700"><strong>HTTP/HTTPS:</strong> Giao thức chuẩn của Web (RESTful API).</span>
          </li>
          <li class="flex items-start">
            <span class="text-teal-600 font-bold mr-2">➜</span>
            <span class="text-gray-700"><strong>WebSockets:</strong> Cho phép giao tiếp 2 chiều thời gian thực (Chat app).</span>
          </li>
          <li class="flex items-start">
            <span class="text-teal-600 font-bold mr-2">➜</span>
            <span class="text-gray-700"><strong>gRPC:</strong> Framework RPC hiệu năng cao của Google dùng Protocol Buffers.</span>
          </li>
        </ul>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">Kết luận</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Hiểu về Lập trình mạng giúp bạn không chỉ viết code "chạy được" mà còn tối ưu được hiệu năng, 
          biết cách xử lý khi mạng chập chờn (timeout, retry) và bảo mật dữ liệu trên đường truyền.
        </p>

        <div class="bg-gradient-to-r from-teal-50 to-green-50 p-6 rounded-lg mt-8 border border-teal-100">
          <p class="text-teal-800 font-medium mb-2">🌐 Bạn muốn thử sức?</p>
          <p class="text-teal-700 text-sm">
            Hãy thử viết một ứng dụng Chat đơn giản sử dụng <strong>Socket.io</strong> (Node.js) hoặc <strong>Java Socket</strong>. 
            Đó là bài tập vỡ lòng tốt nhất để hiểu cách dữ liệu di chuyển.
          </p>
        </div>
      </div>
    `,
    author: "Võ Tấn Lợi",
    authorAvatar: "/avata.jpg",
    date: "28/02/2025",
    readTime: "7 phút đọc",
    tags: ["Networking", "Socket", "TCP/IP", "Backend", "HTTP"],
    category: "Computer Science",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&h=600&fit=crop",
    views: 1530
  },
  {
    id: 5,
    title: "VPS là gì? Tại sao Developer nào cũng nên có một chiếc?",
    excerpt: "Bạn muốn toàn quyền kiểm soát server? Muốn cài đặt Docker, chạy VPN riêng hay host website với hiệu năng cao? VPS chính là câu trả lời.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Khi mới bắt đầu làm web, chúng ta thường nghe đến "Shared Hosting" vì nó rẻ và dễ dùng. 
          Nhưng đến một lúc nào đó, bạn sẽ gặp thông báo lỗi giới hạn tài nguyên, hoặc đơn giản là bạn muốn cài một thư viện lạ mà nhà cung cấp không cho phép.
          Đó là lúc bạn cần nâng cấp lên <strong>VPS (Virtual Private Server)</strong>.
        </p>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">1. VPS là gì? (Giải thích bằng bất động sản)</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Để dễ hình dung, hãy so sánh việc thuê máy chủ với việc thuê chỗ ở:
        </p>

        <div class="grid md:grid-cols-3 gap-4 mb-8">
           <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
             <div class="text-center text-4xl mb-3">🛏️</div>
             <h4 class="font-bold text-center text-slate-900 mb-2">Shared Hosting</h4>
             <p class="text-xs text-center text-gray-500 font-mono mb-2">(Ký túc xá)</p>
             <p class="text-gray-600 text-sm text-justify">
               Bạn sống chung phòng với nhiều người. Giá rẻ, nhưng ồn ào. Nếu một người chiếm hết toilet (RAM/CPU), bạn phải chờ. Bạn không được quyền sơn sửa phòng.
             </p>
           </div>

           <div class="bg-blue-50 p-5 rounded-lg border-2 border-blue-500 shadow-md relative">
             <span class="absolute top-0 right-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-bl">Khuyên dùng</span>
             <div class="text-center text-4xl mb-3">🏢</div>
             <h4 class="font-bold text-center text-blue-900 mb-2">VPS</h4>
             <p class="text-xs text-center text-blue-400 font-mono mb-2">(Căn hộ chung cư)</p>
             <p class="text-gray-700 text-sm text-justify">
               Bạn có căn hộ riêng trong tòa nhà lớn. Bạn có toilet riêng, bếp riêng. Bạn muốn sơn tường màu gì tùy thích (Root Access). Hàng xóm ồn ào ít ảnh hưởng đến bạn hơn.
             </p>
           </div>

           <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
             <div class="text-center text-4xl mb-3">🏰</div>
             <h4 class="font-bold text-center text-slate-900 mb-2">Dedicated Server</h4>
             <p class="text-xs text-center text-gray-500 font-mono mb-2">(Biệt thự nguyên căn)</p>
             <p class="text-gray-600 text-sm text-justify">
               Bạn thuê cả tòa nhà. Cực mạnh, cực riêng tư, nhưng chi phí rất đắt đỏ và cần tự bảo quản mọi thứ.
             </p>
           </div>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">2. Tại sao Dev lại "ghiền" VPS?</h2>
        
        <ul class="space-y-4 mb-6">
          <li class="flex items-start">
            <span class="text-green-500 font-bold mr-3 text-xl">✓</span>
            <div>
              <strong class="text-slate-900">Quyền lực tối cao (Root Access):</strong>
              <p class="text-gray-700 mt-1">
                Bạn nắm quyền quản trị cao nhất. Bạn có thể cài Ubuntu, CentOS, Docker, Node.js phiên bản mới nhất, hay thậm chí chỉnh sửa file cấu hình hệ thống.
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 font-bold mr-3 text-xl">✓</span>
            <div>
              <strong class="text-slate-900">IP Tĩnh (Dedicated IP):</strong>
              <p class="text-gray-700 mt-1">
                VPS thường đi kèm một địa chỉ IPv4 riêng biệt. Rất quan trọng nếu bạn muốn chạy Mail Server hoặc làm whitelist IP cho database.
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 font-bold mr-3 text-xl">✓</span>
            <div>
              <strong class="text-slate-900">Chi phí hợp lý:</strong>
              <p class="text-gray-700 mt-1">
                Với công nghệ ảo hóa (KVM, VMware), giá VPS giờ rất rẻ. Chỉ từ $5/tháng (bằng ly trà sữa) là có một server riêng để vọc vạch.
              </p>
            </div>
          </li>
        </ul>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">3. Bạn có thể làm gì với VPS?</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Mua VPS về không chỉ để ngắm, đây là sân chơi để bạn thực hành kỹ năng <strong>System Admin & DevOps</strong>:
        </p>

        <div class="bg-gray-900 text-gray-300 p-6 rounded-lg font-mono text-sm mb-6">
          <p class="text-gray-500 mb-2"># 1. Host Website cá nhân/Portfolio</p>
          <p class="mb-4">$ docker run -d -p 80:80 nginx</p>

          <p class="text-gray-500 mb-2"># 2. Tạo VPN Server riêng (OpenVPN/WireGuard) để bảo mật khi dùng Wifi công cộng</p>
          <p class="mb-4">$ wget https://git.io/vpn -O openvpn-install.sh && bash openvpn-install.sh</p>

          <p class="text-gray-500 mb-2"># 3. Treo Game Server (Minecraft, CS:GO)</p>
          <p class="mb-4">$ java -Xmx1024M -Xms1024M -jar server.jar nogui</p>
          
          <p class="text-gray-500 mb-2"># 4. Chạy Database Server</p>
          <p>$ sudo apt install mysql-server</p>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">4. Những cái tên nổi bật</h2>
        
        <p class="text-gray-700 leading-relaxed mb-6">
          Thị trường VPS (Cloud Server) hiện nay rất sôi động. Dưới đây là những nhà cung cấp uy tín mà dân Dev hay dùng:
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-center">
            <div class="p-4 bg-gray-50 rounded border hover:border-blue-500 transition cursor-pointer">
                <span class="font-bold text-gray-700">DigitalOcean</span>
            </div>
            <div class="p-4 bg-gray-50 rounded border hover:border-blue-500 transition cursor-pointer">
                <span class="font-bold text-gray-700">AWS Lightsail</span>
            </div>
            <div class="p-4 bg-gray-50 rounded border hover:border-blue-500 transition cursor-pointer">
                <span class="font-bold text-gray-700">Linode</span>
            </div>
            <div class="p-4 bg-gray-50 rounded border hover:border-blue-500 transition cursor-pointer">
                <span class="font-bold text-gray-700">Vultr</span>
            </div>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">Kết luận</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Nếu bạn đang học Công nghệ thông tin, lời khuyên chân thành là hãy thuê ngay một con VPS giá rẻ. 
          Việc tự tay SSH vào màn hình đen, gõ lệnh cài đặt, cấu hình tường lửa (Firewall) sẽ dạy bạn nhiều điều hơn bất kỳ giáo trình lý thuyết nào.
        </p>

        <div class="bg-yellow-50 border-l-4 border-yellow-400 p-5 mt-6 text-sm text-yellow-800">
          <strong>⚠️ Lưu ý:</strong> "With great power comes great responsibility". Có toàn quyền nghĩa là nếu bạn cấu hình sai, server có thể bị hack hoặc mất dữ liệu. Hãy nhớ backup thường xuyên!
        </div>
      </div>
    `,
    author: "Võ Tấn Lợi",
    authorAvatar: "/avata.jpg",
    date: "02/03/2025",
    readTime: "9 phút đọc",
    tags: ["VPS", "Server", "Linux", "DevOps", "Cloud"],
    category: "Infrastructure",
    imageUrl: "https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?w=1200&h=600&fit=crop",
    views: 2105
  },
  {
    id: 6,
    title: "VirtualBox: Xây dựng phòng thí nghiệm ảo ngay trên máy tính của bạn",
    excerpt: "Bạn muốn cài Linux nhưng sợ hỏng Windows? Muốn test virus mà không sợ mất dữ liệu? VirtualBox chính là chiếc 'hộp cát' an toàn tuyệt đối dành cho bạn.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Ngày xưa, để cài thử một hệ điều hành mới (như Ubuntu, CentOS), chúng ta phải chia ổ cứng, format phân vùng và nơm nớp lo sợ lỡ tay xóa mất dữ liệu quan trọng trên Windows. 
          Sự ra đời của các phần mềm ảo hóa như <strong>Oracle VM VirtualBox</strong> đã thay đổi hoàn toàn cuộc chơi.
        </p>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">1. VirtualBox là gì? (Hiểu đơn giản)</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Hãy tưởng tượng máy tính của bạn là một ngôi nhà lớn (Host OS). VirtualBox cho phép bạn xây những "căn phòng kín" (Guest OS) bên trong ngôi nhà đó.
        </p>
        
        <ul class="space-y-3 mb-6">
          <li class="flex items-start">
            <span class="text-orange-500 font-bold mr-2">➜</span>
            <span class="text-gray-700">Mọi thứ diễn ra trong căn phòng kín (máy ảo) <strong>không thể</strong> ảnh hưởng ra bên ngoài ngôi nhà (máy thật).</span>
          </li>
          <li class="flex items-start">
            <span class="text-orange-500 font-bold mr-2">➜</span>
            <span class="text-gray-700">Bạn có thể chạy Windows, Linux, macOS cùng lúc trên một màn hình.</span>
          </li>
        </ul>

        

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">2. Tại sao Dev cần VirtualBox?</h2>
        
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white p-5 rounded-lg border-l-4 border-green-500 shadow-sm">
            <h4 class="font-bold text-lg text-slate-900 mb-2">🧪 Môi trường Test an toàn</h4>
            <p class="text-gray-600 text-sm">
              Bạn muốn thử chạy một đoạn mã nguy hiểm? Hay muốn cài thử một phần mềm lạ? Hãy làm trên máy ảo. Nếu lỗi, chỉ cần xóa máy ảo đi là xong. Máy thật vẫn nguyên vẹn.
            </p>
          </div>
          
          <div class="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <h4 class="font-bold text-lg text-slate-900 mb-2">🌐 Giả lập mạng (Network Lab)</h4>
            <p class="text-gray-600 text-sm">
              Sinh viên mạng máy tính thường dùng VirtualBox để tạo 3-4 máy chủ ảo, kết nối chúng lại để thực hành cấu hình mạng LAN, VPN, Firewall mà không cần mua thiết bị thật.
            </p>
          </div>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">3. Tính năng "bá đạo" nhất: Snapshot</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Nếu bạn chơi game, bạn chắc chắn biết tính năng <strong>Save Game</strong> trước khi đánh trùm. Snapshot trong VirtualBox chính là như vậy.
        </p>

        <div class="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
          <h4 class="font-bold text-orange-800 mb-2">Kịch bản thực tế:</h4>
          <ol class="list-decimal pl-5 space-y-2 text-gray-700">
            <li>Bạn vừa cài xong Ubuntu sạch sẽ. Bạn tạo <strong>Snapshot 1</strong>.</li>
            <li>Bạn vọc vạch, gõ lệnh bậy bạ làm lỗi hệ điều hành, không boot lên được nữa. 😱</li>
            <li>Thay vì cài lại từ đầu, bạn chọn <strong>Restore Snapshot 1</strong>.</li>
            <li>✨ Bùm! Máy ảo quay lại trạng thái hoàn hảo như lúc chưa nghịch dại chỉ trong 5 giây.</li>
          </ol>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">4. Các chế độ mạng (Networking Modes)</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Khi dùng VirtualBox, bạn sẽ hay gặp các thuật ngữ này ở phần Network Settings:
        </p>

        <div class="overflow-x-auto">
          <table class="min-w-full text-left text-sm whitespace-nowrap">
            <thead class="uppercase tracking-wider border-b-2 border-gray-200 bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-4 text-slate-900">Chế độ</th>
                <th scope="col" class="px-6 py-4 text-slate-900">Giải thích</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr>
                <td class="px-6 py-4 font-bold text-blue-600">NAT</td>
                <td class="px-6 py-4 text-gray-700">Máy ảo vào được mạng, nhưng bên ngoài không ping thấy máy ảo. (Mặc định, an toàn nhất).</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-bold text-green-600">Bridged Adapter</td>
                <td class="px-6 py-4 text-gray-700">Máy ảo ngang hàng với máy thật, nhận IP từ Router wifi. Các máy khác trong mạng LAN có thể nhìn thấy nó.</td>
              </tr>
              <tr>
                <td class="px-6 py-4 font-bold text-purple-600">Host-only</td>
                <td class="px-6 py-4 text-gray-700">Chỉ máy thật và máy ảo nhìn thấy nhau. Hoàn toàn cách ly với Internet.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">Kết luận</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Dù hiện nay Docker đang rất phổ biến cho việc đóng gói ứng dụng, nhưng <strong>VirtualBox</strong> vẫn giữ vị trí quan trọng khi bạn cần một hệ điều hành đầy đủ (Full GUI) để kiểm thử.
          Đây là công cụ nhập môn tuyệt vời cho bất kỳ ai muốn bước chân vào thế giới System Admin, DevOps hay An ninh mạng.
        </p>

        <div class="bg-gray-100 p-6 rounded-lg mt-8 text-center border-t-4 border-slate-500">
          <p class="font-medium text-lg mb-2 text-slate-800">💡 Mẹo nhỏ:</p>
          <p class="text-gray-600">
            Đừng quên cài đặt <strong>Guest Additions</strong> sau khi cài xong hệ điều hành. Nó giúp bạn copy-paste văn bản giữa máy thật và máy ảo, cũng như hiển thị full màn hình mượt mà hơn.
          </p>
        </div>
      </div>
    `,
    author: "Võ Tấn Lợi",
    authorAvatar: "/avata.jpg",
    date: "05/03/2025",
    readTime: "8 phút đọc",
    tags: ["VirtualBox", "Virtualization", "Tools", "Linux", "System Admin"],
    category: "Tools & DevOps",
    imageUrl: "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1200&h=600&fit=crop",
    views: 1842
  },
  {
    id: 7,
    title: "OpenVPN: Tự xây dựng 'đường hầm bí mật' trên Internet",
    excerpt: "Internet công cộng đầy rẫy rủi ro. Tìm hiểu cách OpenVPN mã hóa dữ liệu của bạn và tại sao nó vẫn là chuẩn mực vàng cho các kết nối bảo mật doanh nghiệp.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Trong bài viết trước về VPS, mình đã nhắc đến việc tự tạo VPN Server. Hôm nay, chúng ta sẽ đi sâu vào công nghệ đứng sau nó: <strong>OpenVPN</strong>.
          Đây không chỉ là công cụ để "fake IP" xem phim Netflix, mà là giải pháp bảo mật cốt lõi giúp nhân viên làm việc từ xa (Remote work) truy cập an toàn vào hệ thống nội bộ công ty.
        </p>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">1. OpenVPN hoạt động như thế nào?</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Hãy tưởng tượng Internet là một đường cao tốc bằng kính trong suốt. Bất kỳ ai đứng bên đường (Hacker, ISP) đều có thể nhìn thấy xe của bạn chở gì bên trong.
        </p>

        <div class="bg-indigo-50 border-l-4 border-indigo-500 p-6 my-6 rounded-r-lg">
          <p class="text-gray-800 font-medium mb-2">🛡️ Cơ chế Tunneling (Đường hầm):</p>
          <p class="text-gray-700">
            OpenVPN tạo ra một "đường hầm bê tông" bao quanh chiếc xe của bạn. Người ngoài chỉ thấy có một cái ống chạy qua, nhưng hoàn toàn không biết bên trong là xe gì, chở dữ liệu gì.
            Kỹ thuật này gọi là <strong>Encapsulation</strong> (Đóng gói dữ liệu).
          </p>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">2. Tại sao lại là "Open"?</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          OpenVPN là phần mềm mã nguồn mở (Open Source). Điều này cực kỳ quan trọng trong bảo mật vì:
        </p>

        <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li><strong>Không có "Backdoor":</strong> Mã nguồn được hàng ngàn chuyên gia bảo mật kiểm tra. Không ai có thể lén cài mã độc để theo dõi người dùng.</li>
          <li><strong>Mã hóa chuẩn công nghiệp:</strong> Sử dụng thư viện OpenSSL (giao thức SSL/TLS tương tự như ổ khóa màu xanh trên trình duyệt web) để mã hóa dữ liệu.</li>
          <li><strong>Đa nền tảng:</strong> Chạy mượt mà trên Linux, Windows, macOS, Android và iOS.</li>
        </ul>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">3. TCP hay UDP? Sự lựa chọn của người dùng</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          OpenVPN cho phép bạn chạy trên cả hai giao thức mạng (như bài Lập trình mạng đã đề cập). Tùy mục đích mà bạn cấu hình trong file <code>.ovpn</code>:
        </p>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h4 class="font-bold text-lg text-orange-600 mb-2">UDP (Mặc định)</h4>
            <p class="text-gray-600 text-sm mb-2"><strong>Ưu điểm:</strong> Tốc độ cao, độ trễ thấp.</p>
            <p class="text-gray-600 text-sm"><strong>Dùng khi:</strong> Streaming, gọi Video, chơi game, hoặc kết nối mạng ổn định.</p>
          </div>
          
          <div class="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h4 class="font-bold text-lg text-blue-600 mb-2">TCP</h4>
            <p class="text-gray-600 text-sm mb-2"><strong>Ưu điểm:</strong> Độ tin cậy cao, khả năng xuyên tường lửa tốt.</p>
            <p class="text-gray-600 text-sm"><strong>Dùng khi:</strong> Mạng chập chờn, hoặc khi Wifi công cộng chặn cổng VPN (TCP cổng 443 giả lập traffic HTTPS rất tốt).</p>
          </div>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">4. Cấu trúc một file config (.ovpn)</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Nếu bạn tải file cấu hình từ server về, mở bằng Notepad, bạn sẽ thấy nội dung trông như thế này:
        </p>

        <div class="bg-gray-900 text-gray-300 p-6 rounded-lg font-mono text-sm mb-6 overflow-x-auto">
          <p><span class="text-pink-400">client</span> <span class="text-gray-500"># Khai báo đây là máy khách</span></p>
          <p><span class="text-pink-400">dev</span> tun <span class="text-gray-500"># Sử dụng routing tunnel</span></p>
          <p><span class="text-pink-400">proto</span> udp <span class="text-gray-500"># Dùng giao thức UDP</span></p>
          <p><span class="text-pink-400">remote</span> 123.45.67.89 1194 <span class="text-gray-500"># IP Server và Port</span></p>
          <p><span class="text-pink-400">cipher</span> AES-256-GCM <span class="text-gray-500"># Chuẩn mã hóa quân sự</span></p>
          <br>
          <p class="text-green-400">&lt;ca&gt;</p>
          <p class="text-gray-500">... (Chứng chỉ bảo mật để xác thực server) ...</p>
          <p class="text-green-400">&lt;/ca&gt;</p>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">5. Ứng dụng thực tế cho Developer</h2>
        
        <ul class="space-y-4 mb-6">
          <li class="flex items-start">
            <span class="text-green-500 font-bold mr-3 text-xl">✓</span>
            <div>
              <strong class="text-slate-900">IP Whitelisting:</strong>
              <p class="text-gray-700 mt-1">
                Database của công ty chỉ cho phép kết nối từ một IP tĩnh duy nhất. Bạn cài OpenVPN lên VPS (có IP tĩnh), sau đó kết nối VPN để truy cập Database an toàn từ quán cafe.
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 font-bold mr-3 text-xl">✓</span>
            <div>
              <strong class="text-slate-900">Site-to-Site VPN:</strong>
              <p class="text-gray-700 mt-1">
                Kết nối hai văn phòng (Hà Nội và TP.HCM) thành một mạng LAN duy nhất. Nhân viên ở HN có thể in tài liệu ở máy in tại TP.HCM như thể đang ngồi cạnh nhau.
              </p>
            </div>
          </li>
        </ul>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">Kết luận</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Dù ngày nay có nhiều giao thức mới nổi lên như <strong>WireGuard</strong> (nhanh hơn, code gọn hơn), nhưng <strong>OpenVPN</strong> vẫn là "lão làng" nhờ tính ổn định và sự hỗ trợ rộng rãi trên mọi thiết bị Router/Modem.
        </p>

        <div class="bg-gradient-to-r from-slate-100 to-gray-200 p-6 rounded-lg mt-8 text-center border border-gray-300">
          <p class="font-medium text-lg mb-2 text-slate-800">🚀 Thử thách tuần này:</p>
          <p class="text-gray-700 text-sm">
            Hãy tận dụng chiếc VPS bạn đã mua, cài đặt OpenVPN Server (hoặc dùng script <code>openvpn-install</code> trên GitHub) và thử kết nối điện thoại của bạn vào đó nhé!
          </p>
        </div>
      </div>
    `,
    author: "Võ Tấn Lợi",
    authorAvatar: "/avata.jpg",
    date: "08/03/2025",
    readTime: "8 phút đọc",
    tags: ["OpenVPN", "Security", "Networking", "Linux", "Tunneling"],
    category: "Security",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=600&fit=crop",
    views: 1654
  },
  {
    id: 8,
    title: "Mã hóa RSA: Chìa khóa công khai và bí mật vận hành Internet",
    excerpt: "Làm thế nào để gửi một bí mật cho người lạ mà không sợ bị nghe lén? Khám phá ma thuật toán học đằng sau RSA và cặp khóa Public/Private Key.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Trong các bài viết trước về VPS và GitHub, chúng ta thường nhắc đến cụm từ "SSH Key". 
          Bạn tạo một cặp khóa, giữ lại một cái và đưa cái kia lên server. Đó chính là ứng dụng phổ biến nhất của <strong>RSA</strong> (Rivest–Shamir–Adleman).
          Vậy tại sao chúng ta lại cần đến 2 cái chìa khóa?
        </p>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">1. Vấn đề của Mã hóa cổ điển</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Trước khi RSA ra đời, thế giới dùng mã hóa đối xứng (Symmetric Encryption). Tức là khóa để đóng và khóa để mở <strong>là một</strong>.
        </p>

        <div class="bg-red-50 border-l-4 border-red-500 p-5 mb-6 rounded-r-lg">
          <p class="font-bold text-red-800 mb-2">⛔ Vấn đề "Con gà quả trứng":</p>
          <p class="text-gray-700 text-sm">
            Alice muốn gửi thư bí mật cho Bob. Alice dùng chìa khóa K để khóa rương. 
            Nhưng để Bob mở được rương, Alice phải gửi chìa khóa K cho Bob. 
            Nếu gửi chìa khóa K qua đường bưu điện, kẻ gian có thể sao chép nó. Vậy làm sao gửi chìa khóa an toàn khi chưa có kênh an toàn?
          </p>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">2. Giải pháp RSA: Cặp khóa bất đối xứng</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          RSA giải quyết vấn đề trên bằng cách tạo ra 2 chìa khóa riêng biệt nhưng có liên hệ toán học với nhau:
        </p>

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="bg-white p-6 rounded-lg border-2 border-green-500 shadow-sm text-center">
            <div class="text-4xl mb-3">🔓</div>
            <h4 class="font-bold text-lg text-green-700 mb-2">Public Key (Khóa Công Khai)</h4>
            <p class="text-gray-600 text-sm">
              Dùng để <strong>MÃ HÓA</strong>. Bạn công khai nó cho cả thế giới biết. Ai cũng có thể dùng nó để khóa tin nhắn gửi cho bạn.
            </p>
          </div>
          
          <div class="bg-white p-6 rounded-lg border-2 border-red-500 shadow-sm text-center">
            <div class="text-4xl mb-3">🗝️</div>
            <h4 class="font-bold text-lg text-red-700 mb-2">Private Key (Khóa Bí Mật)</h4>
            <p class="text-gray-600 text-sm">
              Dùng để <strong>GIẢI MÃ</strong>. Chỉ DUY NHẤT bạn giữ nó. Không bao giờ được gửi cho ai khác.
            </p>
          </div>
        </div>

        <h3 class="text-2xl font-bold text-slate-800 mt-8 mb-4">Ví dụ hòm thư (Mailbox Analogy)</h3>
        <p class="text-gray-700 leading-relaxed">
            Hãy tưởng tượng <strong>Public Key</strong> là cái khe nhét thư trên cửa nhà bạn. Ai đi ngang qua cũng có thể nhét thư vào đó (Mã hóa). 
            Nhưng một khi thư đã rơi vào trong, không ai có thể lấy ra đọc được, kể cả người vừa nhét vào.
            Chỉ có bạn - người giữ <strong>Private Key</strong> (chìa khóa tủ) - mới có thể mở thùng thư để lấy thư ra đọc (Giải mã).
        </p>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">3. Ma thuật toán học (Đơn giản hóa)</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
            Tại sao RSA lại an toàn? Nó dựa trên độ khó của việc <strong>phân tích thừa số nguyên tố</strong> (Prime Factorization).
        </p>

        <div class="bg-slate-800 text-gray-200 p-6 rounded-lg font-mono text-sm mb-6">
            <p class="mb-2 text-yellow-400">1. Bài toán xuôi (Dễ):</p>
            <p>Cho P = 17, Q = 19. Tính N = P * Q?</p>
            <p class="text-green-400">=> N = 323 (Máy tính làm trong 1 nốt nhạc)</p>
            
            <p class="mt-4 mb-2 text-yellow-400">2. Bài toán ngược (Siêu khó):</p>
            <p>Cho N = 312503213... (một số có 600 chữ số). Tìm P và Q?</p>
            <p class="text-red-400">=> Máy tính cần hàng nghìn năm để thử hết các khả năng.</p>
        </div>
        
        <p class="text-gray-700 text-sm italic">
            *Trong RSA, Public Key chứa số N, còn Private Key chứa thông tin về P và Q. Đó là lý do từ Public Key không thể suy ngược ra Private Key được.
        </p>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">4. Ứng dụng thực tế: HTTPS & Chữ ký số</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
           RSA không chỉ dùng để mã hóa tin nhắn, mà còn dùng để xác thực danh tính (Digital Signature).
        </p>

        <ul class="space-y-4 mb-6">
          <li class="flex items-start">
            <span class="text-blue-500 font-bold mr-3 text-xl">✓</span>
            <div>
              <strong class="text-slate-900">HTTPS (SSL/TLS):</strong>
              <p class="text-gray-700 mt-1">
                Khi bạn vào trang Web ngân hàng, trình duyệt dùng Public Key của ngân hàng để mã hóa một "khóa phiên" rồi gửi đi. Chỉ ngân hàng mới giải mã được.
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 font-bold mr-3 text-xl">✓</span>
            <div>
              <strong class="text-slate-900">Chữ ký số (Digital Signature):</strong>
              <p class="text-gray-700 mt-1">
                Ngược lại với mã hóa: Bạn dùng Private Key để "ký" lên tài liệu. Người khác dùng Public Key của bạn để kiểm tra. Nếu khớp, chứng tỏ tài liệu đó chính chủ do bạn ký và chưa bị sửa đổi.
              </p>
            </div>
          </li>
        </ul>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">5. Nhược điểm: Chậm nhưng Chắc</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          RSA tính toán rất phức tạp nên tốc độ chậm hơn mã hóa đối xứng (AES) hàng trăm lần.
          Vì vậy, trong thực tế, người ta dùng <strong>Mô hình lai (Hybrid Encryption)</strong>:
        </p>

        <div class="bg-gray-100 p-4 rounded border border-gray-300">
            <ol class="list-decimal pl-5 text-gray-800 space-y-2">
                <li>Dùng <strong>RSA</strong> để trao đổi chìa khóa AES (nhanh gọn, dung lượng nhỏ).</li>
                <li>Sau khi hai bên đã có chìa khóa AES, dùng <strong>AES</strong> để mã hóa dữ liệu truyền tải (phim, ảnh, file lớn).</li>
            </ol>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">Kết luận</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          RSA là một trong những phát minh toán học vĩ đại nhất thế kỷ 20, đặt nền móng cho thương mại điện tử và sự riêng tư trên Internet. 
          Lần tới khi tạo SSH Key để kết nối vào VPS, hãy nhớ rằng bạn đang sử dụng một công nghệ đã bảo vệ bí mật của cả thế giới suốt 40 năm qua.
        </p>
      </div>
    `,
    author: "Võ Tấn Lợi",
    authorAvatar: "/avata.jpg",
    date: "12/03/2025",
    readTime: "11 phút đọc",
    tags: ["RSA", "Cryptography", "Security", "Algorithm", "Math"],
    category: "Security",
    imageUrl: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=1200&h=600&fit=crop",
    views: 1102
  },
  {
    id: 9,
    title: "HTML: Khung xương vững chắc của mọi Website",
    excerpt: "Trước khi có màu sắc đẹp đẽ hay hiệu ứng lung linh, một website cần một bộ khung vững chắc. HTML chính là viên gạch đầu tiên trong hành trình lập trình web.",
    content: `
      <div class="prose prose-lg max-w-none">
        <p class="text-lg text-gray-700 leading-relaxed mb-6">
          Có một câu nói đùa kinh điển trong giới lập trình: <em>"HTML không phải là ngôn ngữ lập trình"</em>. 
          Về mặt kỹ thuật, điều này đúng (nó là ngôn ngữ đánh dấu - Markup Language). 
          Tuy nhiên, không một website nào - từ Facebook, Google cho đến blog cá nhân này - có thể tồn tại mà không có HTML.
        </p>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">1. HTML là gì? (Tư duy Xây nhà)</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Để hiểu rõ bộ ba HTML - CSS - JavaScript, hãy tưởng tượng chúng ta đang xây một ngôi nhà:
        </p>

        <div class="grid md:grid-cols-3 gap-4 mb-8">
           <div class="bg-orange-50 p-5 rounded-lg border-t-4 border-orange-500 shadow-sm">
             <h4 class="font-bold text-center text-orange-700 mb-2">HTML</h4>
             <p class="text-center text-4xl mb-2">🧱</p>
             <p class="text-gray-700 text-sm text-center">
               Là <strong>bộ khung, tường, cột</strong>. Nó định hình đâu là phòng ngủ (Header), đâu là cửa chính (Body), đâu là nhà kho (Footer).
             </p>
           </div>

           <div class="bg-blue-50 p-5 rounded-lg border-t-4 border-blue-500 shadow-sm">
             <h4 class="font-bold text-center text-blue-700 mb-2">CSS</h4>
             <p class="text-center text-4xl mb-2">🎨</p>
             <p class="text-gray-700 text-sm text-center">
               Là <strong>sơn tường, nội thất, trang trí</strong>. Nó làm cho ngôi nhà đẹp đẽ, bắt mắt và có phong cách riêng.
             </p>
           </div>

           <div class="bg-yellow-50 p-5 rounded-lg border-t-4 border-yellow-500 shadow-sm">
             <h4 class="font-bold text-center text-yellow-700 mb-2">JavaScript</h4>
             <p class="text-center text-4xl mb-2">💡</p>
             <p class="text-gray-700 text-sm text-center">
               Là <strong>hệ thống điện, nước, smart home</strong>. Nó giúp ngôi nhà "động đậy": bấm công tắc đèn sáng, cửa tự động mở.
             </p>
           </div>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">2. Cấu trúc một trang HTML chuẩn</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Mọi file HTML đều bắt đầu bằng một cấu trúc cây (DOM Tree) cơ bản như sau:
        </p>

        <div class="bg-gray-800 text-gray-200 p-6 rounded-lg font-mono text-sm mb-6 overflow-x-auto">
          <p><span class="text-gray-500">&lt;!DOCTYPE html&gt;</span></p>
          <p><span class="text-orange-400">&lt;html&gt;</span></p>
          
          <div class="pl-4 border-l border-gray-600 ml-1">
            <p><span class="text-blue-400">&lt;head&gt;</span></p>
            <p class="pl-4 text-gray-400">&lt;!-- Nơi chứa thông tin cho trình duyệt (SEO, Title, CSS) --&gt;</p>
            <p class="pl-4">&lt;title&gt;Trang chủ&lt;/title&gt;</p>
            <p><span class="text-blue-400">&lt;/head&gt;</span></p>
            
            <p class="mt-2"><span class="text-green-400">&lt;body&gt;</span></p>
            <p class="pl-4 text-gray-400">&lt;!-- Nơi chứa nội dung người dùng nhìn thấy --&gt;</p>
            <p class="pl-4">&lt;h1&gt;Xin chào thế giới!&lt;/h1&gt;</p>
            <p class="pl-4">&lt;p&gt;Đây là đoạn văn đầu tiên.&lt;/p&gt;</p>
            <p><span class="text-green-400">&lt;/body&gt;</span></p>
          </div>
          
          <p><span class="text-orange-400">&lt;/html&gt;</span></p>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">3. Semantic HTML: Viết code có "tâm"</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Ngày xưa, người ta dùng thẻ <code>&lt;div&gt;</code> cho mọi thứ. Nhưng ngày nay, HTML5 giới thiệu các thẻ có ngữ nghĩa (Semantic Tags).
          Tại sao phải dùng chúng?
        </p>
        
        

        <ul class="space-y-4 mb-6">
          <li class="flex items-start">
            <span class="text-green-500 font-bold mr-3 text-xl">✓</span>
            <div>
              <strong class="text-slate-900">Tốt cho SEO (Google):</strong>
              <p class="text-gray-700 mt-1">
                Google Bot đọc code của bạn. Nếu bạn dùng <code>&lt;article&gt;</code>, Google hiểu đó là bài viết. 
                Nếu dùng <code>&lt;nav&gt;</code>, nó hiểu đó là menu điều hướng. Dùng <code>&lt;div&gt;</code> thì nó... đoán mò.
              </p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 font-bold mr-3 text-xl">✓</span>
            <div>
              <strong class="text-slate-900">Accessibility (Khả năng truy cập):</strong>
              <p class="text-gray-700 mt-1">
                Người khiếm thị sử dụng trình đọc màn hình (Screen Reader). Các thẻ Semantic giúp họ biết đâu là tiêu đề, đâu là nội dung chính để điều hướng dễ dàng hơn.
              </p>
            </div>
          </li>
        </ul>

        <div class="overflow-x-auto mb-6">
          <table class="min-w-full text-left text-sm whitespace-nowrap border border-gray-200">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-4 py-2 text-slate-900">Code tồi (Non-semantic)</th>
                <th class="px-4 py-2 text-slate-900">Code chuẩn (Semantic)</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-100">
              <tr>
                <td class="px-4 py-2 font-mono text-red-500">&lt;div class="header"&gt;</td>
                <td class="px-4 py-2 font-mono text-green-600">&lt;header&gt;</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-mono text-red-500">&lt;div class="main-content"&gt;</td>
                <td class="px-4 py-2 font-mono text-green-600">&lt;main&gt;</td>
              </tr>
              <tr>
                <td class="px-4 py-2 font-mono text-red-500">&lt;div class="footer"&gt;</td>
                <td class="px-4 py-2 font-mono text-green-600">&lt;footer&gt;</td>
              </tr>
              <tr>
                 <td class="px-4 py-2 font-mono text-red-500">&lt;b&gt;In đậm&lt;/b&gt;</td>
                 <td class="px-4 py-2 font-mono text-green-600">&lt;strong&gt; (Nhấn mạnh)</td>
               </tr>
            </tbody>
          </table>
        </div>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">4. Những cái bẫy người mới hay gặp</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          HTML trông dễ nhưng rất dễ mắc lỗi "ngớ ngẩn" khiến trang web chạy sai hoặc xấu:
        </p>

        <ul class="list-disc pl-6 space-y-2 mb-6 text-gray-700">
            <li><strong>Quên đóng thẻ:</strong> Mở <code>&lt;div&gt;</code> mà quên đóng <code>&lt;/div&gt;</code> sẽ làm vỡ giao diện cả trang.</li>
            <li><strong>Dùng sai thẻ Heading:</strong> Thứ tự phải là <code>h1</code> -> <code>h2</code> -> <code>h3</code>. Đừng dùng <code>h3</code> chỉ vì muốn chữ nhỏ lại (hãy dùng CSS).</li>
            <li><strong>Quên thuộc tính <code>alt</code> trong ảnh:</strong> <code>&lt;img src="..." alt="Mô tả ảnh"&gt;</code>. Nếu ảnh lỗi, người dùng vẫn biết đó là gì nhờ .</li>
            <li><strong>Inline Styles:</strong> Viết CSS trực tiếp vào thẻ HTML (<code>style="color: red"</code>). Rất khó bảo trì. Hãy tách ra file .css riêng.</li>
        </ul>

        <h2 class="text-3xl font-bold mt-10 mb-6 text-slate-900">Kết luận</h2>
        
        <p class="text-gray-700 leading-relaxed mb-4">
          Học HTML chỉ mất khoảng 1-2 ngày để nắm hết các thẻ cơ bản. Nhưng để viết được HTML "sạch", chuẩn SEO và tối ưu thì cần rèn luyện liên tục.
          Hãy nhớ: Một trang web đẹp đến mấy mà cấu trúc HTML lộn xộn thì cũng như ngôi nhà xây trên nền cát vậy.
        </p>

        <div class="bg-gradient-to-r from-orange-100 to-red-50 p-6 rounded-lg mt-8">
          <p class="text-orange-900 font-medium mb-2">🔥 Tài liệu học HTML tốt nhất:</p>
          <p class="text-gray-700 text-sm">
            Mình khuyên các bạn nên tham khảo <strong>MDN Web Docs</strong> (Mozilla Developer Network). 
            Đây là "kinh thánh" của dân lập trình Web, chính xác và cập nhật nhất.
          </p>
        </div>
      </div>
    `,
    author: "Võ Tấn Lợi",
    authorAvatar: "/avata.jpg",
    date: "15/03/2025",
    readTime: "5 phút đọc",
    tags: ["HTML", "Frontend", "Web Dev", "Beginner", "Basics"],
    category: "Development",
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&h=600&fit=crop",
    views: 3100
  }
];
