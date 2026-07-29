import { motion } from 'motion/react';
import { ArrowRight, Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NEWS_ARTICLES = [
  {
    id: 1,
    title: 'Xu Hướng Nội Thất Gỗ Tự Nhiên Cho Năm 2026',
    excerpt: 'Khám phá những phong cách thiết kế nội thất gỗ dự kiến sẽ làm mưa làm gió trong năm tới, từ nét cổ điển tinh tế đến phong cách tối giản hiện đại.',
    content: 'Đồ gỗ tự nhiên chưa bao giờ mất đi sức hút. Trong năm 2026, xu hướng "Less is More" sẽ tiếp tục thống trị, tập trung vào những đường nét đơn giản nhưng tinh tế. Gỗ sồi, gỗ óc chó với màu sắc mộc mạc và vân gỗ tự nhiên được dự báo sẽ trở thành trung tâm của nhiều không gian sống.\n\nBên cạnh đó, việc kết hợp gỗ với các chất liệu khác như đá, kim loại sẽ tạo ra những điểm nhấn độc đáo, vừa mang tính cổ điển vừa mang hơi thở hiện đại. Sự pha trộn giữa các vật liệu này không chỉ tôn lên vẻ đẹp nguyên bản của gỗ mà còn tạo ra sự cân bằng hoàn hảo về mặt thị giác. Các chi tiết kim loại bóng bẩy hay mặt đá tự nhiên mát lạnh khi đặt cạnh sự ấm áp của gỗ sẽ tạo nên một không gian sống đầy nghệ thuật.\n\nHuy Hào tự hào mang đến những bộ sưu tập đón đầu xu hướng, kết nối con người gần hơn với thiên nhiên. Đội ngũ thiết kế của chúng tôi luôn không ngừng sáng tạo để mang đến những sản phẩm nội thất không chỉ đẹp mắt mà còn đề cao tính ứng dụng, phù hợp với nhịp sống hiện đại nhưng vẫn giữ gìn được những giá trị truyền thống cốt lõi.\n\nKhách hàng ngày càng quan tâm đến tính cá nhân hóa trong không gian sống. Do đó, xu hướng đặt thiết kế nội thất "đo ni đóng giày" cũng sẽ bùng nổ trong năm nay. Những chiếc tủ bếp, kệ tivi hay tủ quần áo được thiết kế riêng biệt theo diện tích thực tế và sở thích cá nhân không chỉ tối ưu hóa công năng mà còn thể hiện được gu thẩm mỹ độc bản của gia chủ. Tại Huy Hào, chúng tôi cung cấp dịch vụ thiết kế 3D hoàn toàn miễn phí, giúp khách hàng dễ dàng hình dung ngôi nhà mơ ước trước khi tiến hành thi công.\n\nĐồng thời, sự lên ngôi của phong cách Japandi (kết hợp giữa sự tối giản của Nhật Bản và nét thanh lịch của Bắc Âu) sẽ định hình lại cách chúng ta sắp xếp không gian. Nội thất gỗ tông màu ấm áp như sồi tự nhiên hay tần bì kết hợp với ánh sáng tự nhiên và cây xanh sẽ tạo nên những góc nhỏ bình yên, giúp gia chủ tìm lại sự cân bằng sau những giờ làm việc căng thẳng. Đồ nội thất không còn chỉ là vật dụng, mà đã trở thành những "người bạn" đồng hành, vỗ về cảm xúc và nuôi dưỡng tâm hồn.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
    date: '15 Thg 05, 2026',
    category: 'Xu Hướng'
  },
  {
    id: 2,
    title: 'Bí Quyết Kéo Dài Tuổi Thọ Nội Thất Gỗ Của Bạn',
    excerpt: 'Những cách đơn giản và hiệu quả để bảo quản đồ nội thất bằng gỗ luôn sáng bóng, bền đẹp và chống lại tác động của thời gian.',
    content: 'Nội thất gỗ cần được chăm sóc đúng cách để duy trì vẻ đẹp và độ bền. Hãy thường xuyên lau chùi bằng khăn mềm, tránh dùng chất tẩy rửa mạnh. Nên sử dụng các loại nước lau chuyên dụng dành riêng cho đồ gỗ để bảo vệ bề mặt sơn và giữ cho vân gỗ luôn sáng bóng.\n\nTránh đặt đồ gỗ trực tiếp dưới ánh nắng mặt trời hay những nơi có độ ẩm cao, bởi sự chênh lệch nhiệt độ và độ ẩm có thể làm gỗ bị nứt nẻ, cong vênh. Nếu phát hiện vết xước nhỏ, bạn có thể dùng sáp đánh bóng chuyên dụng hoặc các mẹo dân gian như dùng quả óc chó chà xát nhẹ lên bề mặt để che đi vết xước.\n\nĐịnh kỳ hàng năm, hãy bảo dưỡng lại lớp sơn hoặc lớp bề mặt. Việc làm mới lớp bảo vệ không chỉ giúp đồ gỗ trông như mới mà còn ngăn chặn sự xâm nhập của mối mọt. Với chế độ bảo trì trọn đời của Huy Hào, đồ gỗ của bạn sẽ luôn trong tình trạng tuyệt vời nhất. Chúng tôi cung cấp dịch vụ đánh bóng, làm mới và sửa chữa tận nhà với đội ngũ kỹ thuật viên giàu kinh nghiệm.\n\nNgoài ra, bạn cũng cần lưu ý về cách di chuyển đồ nội thất gỗ trong nhà. Khi muốn thay đổi vị trí của tủ, giường hay bàn ghế lớn, hãy nhấc bổng chúng lên thay vì kéo lê trên sàn nhà. Việc kéo lê không chỉ làm xước sàn mà còn khiến các khớp nối của đồ gỗ bị lỏng lẻo, giảm tuổi thọ của sản phẩm. Đối với những vật dụng nhỏ hơn như ghế ăn, hãy dán thêm các miếng đệm lót dưới chân ghế.\n\nViệc sử dụng các tấm lót ly, thảm trải bàn cũng là một biện pháp hiệu quả để bảo vệ mặt bàn gỗ khỏi những vết xước, vết ố từ đồ uống nóng hoặc lạnh. Chỉ bằng những thói quen nhỏ hàng ngày, bạn đã góp phần giữ gìn giá trị và vẻ đẹp của những món đồ nội thất gỗ tự nhiên, để chúng luôn đồng hành cùng gia đình qua nhiều thế hệ.',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200',
    date: '02 Thg 05, 2026',
    category: 'Mẹo Nuôi Dưỡng'
  },
  {
    id: 3,
    title: 'Khảm Gỗ Truyền Thống: Nét Đẹp Không Phai',
    excerpt: 'Lắng nghe những nghệ nhân lâu năm chia sẻ về nghệ thuật khảm gỗ và tầm quan trọng của việc gìn giữ tinh hoa truyền thống này.',
    content: 'Nghệ thuật khảm gỗ đòi hỏi sự tinh xảo, nhẫn nại và con mắt thẩm mỹ bậc thầy. Tại xưởng của Huy Hào, những nghệ nhân với hàng chục năm kinh nghiệm vẫn miệt mài thổi hồn vào từng thớ gỗ. Mỗi sản phẩm khảm gỗ không chỉ là một món đồ nội thất mà còn là một tác phẩm nghệ thuật, một câu chuyện văn hóa được truyền lại cho thế hệ mai sau.\n\nQuá trình tạo ra một tác phẩm khảm gỗ mất rất nhiều thời gian và công sức. Từ việc lựa chọn những mảnh gỗ nhỏ xíu, xà cừ hay ốc xà cừ, cưa cắt tỉ mỉ đến việc ghép chúng lại thành những bức tranh sống động trên bề mặt đồ nội thất, tất cả đều phải được thực hiện bằng tay với độ chính xác tuyệt đối.\n\nViệc bảo tồn nghệ thuật này trước sự phát triển của công nghiệp hiện đại là một trong những sứ mệnh hàng đầu của chúng tôi. Huy Hào luôn tạo điều kiện tốt nhất để các nghệ nhân được thỏa sức sáng tạo và truyền nghề cho thế hệ trẻ, đảm bảo rằng những giá trị truyền thống này sẽ không bao giờ bị mai một theo thời gian.\n\nMỗi hoạ tiết khảm trên bề mặt gỗ thường mang những ý nghĩa phong thuỷ sâu sắc, thể hiện ước vọng về một cuộc sống bình an, hạnh phúc và sung túc. Hình ảnh Tùng, Cúc, Trúc, Mai hay Long, Lân, Quy, Phụng không chỉ đơn thuần là những hoa văn trang trí mà còn là những biểu tượng văn hoá lâu đời của người Việt. Việc sở hữu một món đồ nội thất khảm gỗ trong nhà chính là mang cả một không gian nghệ thuật truyền thống vào không gian sống hiện đại.\n\nSự kết hợp giữa chất liệu gỗ tự nhiên quý hiếm như Hương, Trắc, Cẩm Lai cùng với lớp khảm xà cừ óng ánh tạo nên vẻ đẹp lộng lẫy và sang trọng bậc nhất. Khi ánh sáng chiếu vào, các mảnh khảm sẽ phản chiếu những màu sắc khác nhau, tạo nên hiệu ứng thị giác vô cùng mãn nhãn. Dù xu hướng nội thất có thay đổi như thế nào, nét đẹp của khảm gỗ truyền thống vẫn sẽ luôn trường tồn và chiếm một vị trí độc tôn trong trái tim của những người yêu cái đẹp.',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1c094f114?auto=format&fit=crop&q=80&w=1200',
    date: '28 Thg 04, 2026',
    category: 'Nghệ Thuật'
  },
  {
    id: 4,
    title: 'Giải Pháp Tối Ưu Không Gian Cho Căn Hộ Nhỏ',
    excerpt: 'Thiết kế nội thất thông minh giúp tiết kiệm diện tích nhưng vẫn đảm bảo tiện nghi và thẩm mỹ cho những căn hộ có không gian hạn chế.',
    content: 'Sống trong không gian nhỏ không có nghĩa là bạn phải hy sinh sự tiện nghi và vẻ đẹp. Hãy sử dụng những món đồ nội thất đa năng như bàn ăn kết hợp tủ đồ, sofa giường hay giường ngủ có hộc kéo. Những thiết kế này không chỉ giúp tiết kiệm diện tích tối đa mà còn mang lại sự gọn gàng, ngăn nắp cho ngôi nhà của bạn.\n\nGam màu gỗ sáng như Sồi Nga có thể giúp tạo cảm giác không gian rộng rãi và thoáng đãng hơn. Kết hợp với ánh sáng tự nhiên và việc bố trí gương hợp lý, căn hộ của bạn sẽ trở nên rộng hơn so với diện tích thực tế. Hãy ưu tiên những thiết kế nội thất có chân thanh mảnh, tạo khoảng trống dưới gầm để ánh sáng dễ dàng xuyên qua.\n\nĐội ngũ thiết kế của Huy Hào sẽ tư vấn và mang đến cho bạn không gian tối ưu nhất. Chúng tôi khảo sát thực tế, phác thảo 3D để bạn có thể hình dung rõ nhất về không gian sống tương lai của mình trước khi tiến hành thi công thực tế.\n\nViệc tận dụng chiều cao của căn hộ cũng là một giải pháp thông minh. Những hệ tủ bếp kịch trần, tủ quần áo âm tường cao sát trần không chỉ tăng không gian lưu trữ mà còn khắc phục nhược điểm bụi bặm đóng trên nóc tủ. Các kệ treo tường thay thế cho tủ đứng truyền thống cũng giúp giải phóng diện tích sàn nhà, mang lại cảm giác rộng rãi hơn.\n\nSự đồng bộ về màu sắc và chất liệu là chìa khóa để một căn hộ nhỏ không trở nên rối mắt. Hãy chọn một tông màu chủ đạo cho toàn bộ nội thất gỗ, ví dụ như màu gỗ tự nhiên sáng kết hợp với màu trắng của sơn tường và ánh sáng vàng ấm áp. Đừng quên điểm xuyết một vài món đồ trang trí nhỏ nhắn, cây xanh để không gian thêm sinh động nhưng vẫn giữ được sự tinh tế, ngăn nắp.',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1200',
    date: '10 Thg 04, 2026',
    category: 'Thiết Kế'
  },
  {
    id: 5,
    title: 'Phân Biệt Gỗ Tự Nhiên Và Gỗ Công Nghiệp',
    excerpt: 'Sự khác nhau cơ bản và ứng dụng thực tế để bạn có thể chọn được vật liệu phù hợp nhất cho không gian và mục đích sử dụng.',
    content: 'Gỗ tự nhiên có giá thành cao hơn nhưng mang lại độ bền tuyệt đối và vẻ đẹp độc bản nhờ những đường vân không trùng lặp. Mỗi thân cây đều mang một câu chuyện riêng, tạo nên sự độc đáo không thể sao chép cho từng món đồ nội thất. Hơn nữa, đồ gỗ tự nhiên có tuổi thọ lên đến hàng chục năm, thậm chí càng dùng lâu càng bóng đẹp và có giá trị.\n\nTrong khi đó, gỗ công nghiệp có chi phí tối ưu, chống cong vênh tốt và mang tính đồng nhất. Với công nghệ hiện đại, gỗ công nghiệp ngày nay có rất nhiều lớp phủ bề mặt đa dạng như Melamine, Laminate, Acrylic hay Veneer, mô phỏng hoàn hảo vẻ đẹp của gỗ tự nhiên và nhiều vật liệu khác. Gỗ công nghiệp đặc biệt phù hợp với những phong cách thiết kế hiện đại, trẻ trung.\n\nTùy thuộc vào ngân sách và vị trí lắp đặt (sofa, kệ tivi cường độ ẩm thấp hay bếp), Huy Hào luôn cam kết đưa ra tư vấn vật liệu chuẩn xác cho dự án của bạn. Chúng tôi cung cấp cả hai dòng sản phẩm với chất lượng cao nhất, đáp ứng mọi nhu cầu đa dạng của khách hàng.\n\nĐối với những không gian thường xuyên tiếp xúc với nước và độ ẩm cao như tủ bếp dưới hay tủ lavabo trong phòng tắm, việc lựa chọn lõi gỗ công nghiệp chống ẩm (như lõi xanh MDF) là giải pháp an toàn và kinh tế. Còn đối với bàn ghế phòng khách, giường ngủ - những nơi cần sự chắc chắn, khả năng chịu lực tốt và tính thẩm mỹ cao thì gỗ tự nhiên như Sồi, Óc chó, Gõ đỏ lại là sự lựa chọn hoàn hảo.\n\nNgày nay, xu hướng kết hợp giữa gỗ tự nhiên và gỗ công nghiệp đang ngày càng phổ biến. Các nhà thiết kế thường dùng gỗ tự nhiên làm khung chịu lực, chân bàn ghế để đảm bảo độ bền vững, trong khi phần mặt bàn, cánh tủ được làm từ gỗ công nghiệp phủ veneer để tránh cong vênh và mang lại vẻ đẹp đồng nhất. Sự linh hoạt trong việc sử dụng vật liệu giúp khách hàng vừa tiết kiệm được chi phí, vừa sở hữu được không gian sống hoàn hảo theo đúng ý thích.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200',
    date: '02 Thg 04, 2026',
    category: 'Kiến Thức'
  },
  {
    id: 6,
    title: 'Phong Thủy Trong Thiết Kế Nội Thất Gỗ',
    excerpt: 'Màu sắc và cách bố trí nội thất gỗ để thu hút tài lộc, bình an, phù hợp với từng bản mệnh gia chủ.',
    content: 'Theo phong thủy, gỗ thuộc hành Mộc, tượng trưng cho mùa xuân, sự sinh sôi và bình yên. Việc đặt đồ nội thất gỗ trong nhà giúp giảm bớt sát khí, cân bằng năng lượng, tạo nên một không gian sống ấm áp và hài hòa. Mộc còn là biểu tượng của sự sáng tạo, sự sống không ngừng vươn lên.\n\nĐối với từng mệnh Mộc, Hỏa, Kim, Thủy, Thổ sẽ có những quy tắc bố trí hướng, chọn loại gỗ (màu sáng hay sẫm) phù hợp để kích hoạt vượng khí. Người mệnh Hỏa rất hợp với nội thất gỗ (Mộc sinh Hỏa), nên chọn gỗ có tông màu ấm như gỗ Gõ đỏ, Hương. Người mệnh Kim nên tránh sử dụng quá nhiều đồ gỗ, nếu dùng nên kết hợp thêm với các vật liệu kim loại hoặc đồ trang trí màu trắng, vàng ánh kim.\n\nHãy cùng Huy Hào chọn lựa không chỉ vật trang trí mà là điểm tựa vận may cho bản mệnh. Chúng tôi có những chuyên gia am hiểu sâu sắc về phong thủy ứng dụng trong nội thất, sẵn sàng hỗ trợ khách hàng kiến tạo một không gian không chỉ đẹp mắt mà còn đem lại tài lộc và sự bình an.\n\nCách bố trí hướng của bàn làm việc, giường ngủ hay bàn thờ cũng đóng vai trò vô cùng quan trọng. Bàn làm việc bằng gỗ nên được đặt ở vị trí "tọa sơn hướng thủy", tựa lưng vào tường vững chãi và hướng tầm nhìn ra không gian thoáng đãng để kích thích sự sáng tạo và đón nhận năng lượng tích cực. Đối với giường ngủ, tránh đặt giường dưới xà ngang hay đối diện trực tiếp với cửa ra vào để đảm bảo giấc ngủ sâu và yên tĩnh.\n\nNgoài ra, hình dáng của đồ nội thất cũng mang ý nghĩa phong thủy nhất định. Các thiết kế bo tròn, uốn lượn tượng trưng cho sự mềm mại, dung hòa, giúp các luồng khí trong nhà lưu thông tốt hơn. Trong khi đó, các thiết kế vuông vức, góc cạnh thể hiện sự vững chãi, uy nghiêm, phù hợp cho không gian phòng khách hay phòng làm việc. Việc lựa chọn đồ nội thất gỗ chuẩn phong thủy chính là cách bạn thể hiện sự trân trọng đối với không gian sống của chính mình.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1200',
    date: '20 Thg 03, 2026',
    category: 'Phong Thủy'
  },
  {
    id: 7,
    title: 'Quy Trình Chế Tác Gỗ Thủ Công Tại Xưởng Huy Hào',
    excerpt: 'Từ những khối gỗ thô sơ đến kiệt tác nghệ thuật là cả một chặng đường dài đầy tâm huyết của những nghệ nhân Huy Hào.',
    content: 'Từ khâu chọn lọc và tẩm sấy tỉ mỉ đến hàng chục công đoạn cắt, tiện, mài, đánh bóng, quy trình tại xưởng Huy Hào là sự kết hợp giữa máy móc hiện đại và kỹ năng tinh hoa của con người. Gỗ nguyên liệu được chúng tôi kiểm tra độ ẩm nghiêm ngặt trước khi đưa vào sản xuất, đảm bảo sự ổn định tối đa cho sản phẩm thành phẩm.\n\nKhông có một đường cong hay mối nối nào được bỏ qua. Các nghệ nhân mộc của chúng tôi sử dụng những phương pháp ghép mộng truyền thống như mộng đuôi én, mộng chốt, đảm bảo sự chắc chắn vĩnh cửu mà không cần dùng đến quá nhiều đinh ốc kim loại. Bề mặt gỗ được chà nhám qua nhiều giai đoạn cho đến khi đạt độ mịn màng hoàn hảo.\n\nMỗi một sản phẩm khi đến tay khách hàng luôn được đảm bảo đã trải qua vòng kiểm soát chất lượng khắt khe nhất. Quá trình sơn phủ cũng được thực hiện trong buồng sơn tiêu chuẩn, giữ lại vẻ đẹp của vân gỗ đồng thời bảo vệ bề mặt chống lại các tác nhân của môi trường.\n\nBên cạnh đó, khâu hoàn thiện bề mặt là nơi thể hiện rõ nhất đôi bàn tay tài hoa của người thợ. Việc phủ lớp sơn Inchem cao cấp nhiều lớp đòi hỏi sự kiên nhẫn và tỉ mỉ cao độ. Mỗi lớp sơn sau khi phủ đều phải chờ khô hoàn toàn, sau đó được chà nhám lại cẩn thận trước khi phủ lớp tiếp theo. Quá trình này lặp đi lặp lại nhiều lần để tạo ra một bề mặt nhẵn mịn, trong suốt, làm nổi bật lên từng đường vân gỗ tự nhiên tuyệt đẹp.\n\nHuy Hào không chỉ tạo ra những sản phẩm nội thất mà còn thổi hồn vào từng thớ gỗ. Chúng tôi tin rằng, những món đồ được làm ra từ đôi bàn tay, khối óc và trái tim của những người thợ tâm huyết sẽ mang lại giá trị bền vững và cảm xúc chân thật nhất cho không gian sống của bạn. Mỗi kiệt tác từ Huy Hào đều là một câu chuyện riêng, chờ đợi được kể trong ngôi nhà của bạn.',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200',
    date: '12 Thg 03, 2026',
    category: 'Sự Kiện'
  },
  {
    id: 8,
    title: 'Gỗ Óc Chó (Walnut) - Sức Hút Của Giới Thượng Lưu',
    excerpt: 'Tại sao gỗ Óc Chó luôn là sự lựa chọn hàng đầu của những không gian sống đẳng cấp và sang trọng?',
    content: 'Đặc trưng bởi màu nâu sẫm, vân gỗ cuộn xoáy tự nhiên đầy sức hút, gỗ Óc Chó nhập khẩu Bắc Mỹ mang trong mình vẻ đẹp đắm chìm và bí ẩn. Độ cứng, khả năng chống mối mọt và sự ổn định bất chấp thời tiết khiến vật liệu này trở thành vua của các dòng nội thất cao cấp. Những đường vân lượn sóng hoặc cuộn xoáy của gỗ óc chó được xem là đỉnh cao của sự tự nhiên, mang đậm tính nghệ thuật.\n\nKhông chỉ nổi bật về vẻ đẹp thẩm mỹ, gỗ Óc Chó còn có độ bền cơ học cực cao, chịu lực uốn xoắn và lực nén cực tốt. Sự thích nghi hoàn hảo với điều kiện khí hậu nóng ẩm tại Việt Nam giúp cho các sản phẩm từ vật liệu này không bị cong vênh hay co ngót trong suốt quá trình sử dụng.\n\nHuy Hào tự hào cung cấp các kiện gỗ nguyên khối nhập khẩu đạt chứng nhận FSC tiêu chuẩn quốc tế. Chúng tôi luôn tuyển chọn những phôi gỗ tốt nhất, vân đẹp nhất để đưa vào sản xuất những sản phẩm mang đẳng cấp hoàng gia, đáp ứng được sự kỳ vọng của giới tinh hoa.\n\nSự kết hợp giữa gỗ Óc Chó và các chất liệu cao cấp khác như da bò Ý thật, đá cẩm thạch tự nhiên hay kim loại mạ vàng sẽ nâng tầm sự sang trọng cho mọi không gian. Một bộ sofa khung gỗ Óc Chó bọc da thật không chỉ là nơi thư giãn tuyệt vời mà còn là trung tâm thu hút mọi ánh nhìn trong phòng khách. Hay một chiếc bàn ăn gỗ Óc Chó nguyên khối đi kèm những chiếc ghế ăn êm ái sẽ làm cho những bữa tiệc gia đình thêm phần ấm cúng và đẳng cấp.\n\nViệc sở hữu nội thất gỗ Óc Chó không chỉ là một khoản đầu tư cho không gian sống mà còn là cách thể hiện phong cách sống tinh tế, gu thẩm mỹ vượt thời gian của chủ nhân. Vẻ đẹp của gỗ Óc Chó không hề phai nhạt theo năm tháng, ngược lại, càng sử dụng lâu dài, bề mặt gỗ càng trở nên bóng bẩy, đậm đà và có giá trị hơn.',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1200',
    date: '05 Thg 03, 2026',
    category: 'Chất Liệu'
  },
  {
    id: 9,
    title: 'Câu Chuyện Về Chiếc Ghế Thư Giãn Phong Cách Bắc Âu',
    excerpt: 'Tìm hiểu nguồn gốc và lý do chiếc ghế Lounge Chair trở thành một biểu tượng thiết kế qua nhiều thập kỷ.',
    content: 'Được sinh ra trong phong trào kiến trúc hiện đại tại khu vực Scandinavia, chiếc Lounge Chair với những đường cong uốn lượn vừa vặn với tư thế nằm ngả của con người đã nhanh chóng chiếm trái tim của người yêu nội thất. Thiết kế này tập trung vào tính công năng và sự thoải mái tối đa, loại bỏ đi những chi tiết trang trí rườm rà không cần thiết.\n\nĐiểm đặc biệt của chiếc ghế này là sự kết hợp hoàn hảo giữa kỹ thuật uốn ván ép hiện đại và phần nệm bọc da hoặc vải nỉ cao cấp. Nó không chỉ là một chiếc ghế để ngồi đọc sách, nghe nhạc hay thư giãn sau một ngày dài làm việc, mà còn là một tác phẩm điêu khắc nghệ thuật làm bừng sáng mọi không gian trong ngôi nhà.\n\nVới phiên bản bọc nỉ chân gỗ sồi tại Huy Hào, chúng tôi hy vọng mang không gian "Hygge" thư giãn đúng nghĩa vào chính căn nhà bạn. Sự ấm áp của gỗ sồi kết hợp với sự êm ái của chất liệu vải bọc sẽ giúp bạn tận hưởng trọn vẹn những khoảnh khắc bình yên và thư thái.\n\nTriết lý "Hygge" của người Đan Mạch chú trọng vào việc tìm kiếm hạnh phúc từ những điều giản dị, ấm áp trong cuộc sống hằng ngày. Một buổi tối mùa đông quấn mình trong chiếc chăn mỏng, cuộn tròn trên chiếc Lounge Chair êm ái bên cạnh ánh đèn vàng ấm áp và một tách trà nóng, đó chính là hiện thân hoàn hảo của phong cách sống này. Chiếc ghế không đơn thuần là vật dụng, nó là nơi trú ẩn an toàn, nơi xoa dịu những mệt mỏi và tái tạo năng lượng cho tâm hồn.\n\nNgày nay, chiếc Lounge Chair đã vượt ra khỏi biên giới Bắc Âu và trở thành nguồn cảm hứng cho rất nhiều nhà thiết kế trên toàn thế giới. Dù được biến tấu với nhiều vật liệu và màu sắc khác nhau, nhưng linh hồn của thiết kế ban đầu - sự kết hợp giữa nét thanh lịch vượt thời gian và trải nghiệm thư giãn tuyệt đối - vẫn luôn được giữ gìn trọn vẹn. Hãy để Huy Hào đồng hành cùng bạn kiến tạo một góc nhỏ "Hygge" ngay trong chính ngôi nhà của mình.',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=1200',
    date: '25 Thg 02, 2026',
    category: 'Câu Chuyện'
  },
  {
    id: 10,
    title: 'Huy Hào Khai Trương Showroom Mới Tại TP.HCM',
    excerpt: 'Cột mốc mới đánh dấu sự phát triển của Huy Hào nhằm mang đến trải nghiệm mua sắm thực tế, đẳng cấp hơn tới khách hàng Miền Nam.',
    content: 'Nhằm đáp ứng nhu cầu trải nghiệm không gian sống mang đậm dấu ấn Huy Hào, chúng tôi hân hoan khai trương showroom quy mô 2000m2 tại trung tâm thành phố Hồ Chí Minh. Nơi đây quy tụ tất cả các dòng sản phẩm từ bàn ghế, sofa, giường tủ trong nhiều concept trưng bày độc đáo. Không gian được thiết kế tinh tế, tái hiện lại những căn hộ mẫu sang trọng để khách hàng dễ dàng hình dung.\n\nSự kiện khai trương thu hút hàng trăm khách mời, trong đó có nhiều đối tác chiến lược, kiến trúc sư và khách hàng thân thiết. Khách tham quan được trải nghiệm thực tế chất lượng sản phẩm, từ độ êm ái của những bộ sofa bọc da Ý cho đến sự mượt mà trên từng đường vân gỗ của các bộ bàn ăn Óc Chó nguyên tấm.\n\nTrân trọng kính mời quý khách hàng đến tham quan và nhận ưu đãi độc quyền. Chúng tôi tin rằng, showroom mới sẽ là điểm đến lý tưởng cho những ai đang tìm kiếm sự hoàn hảo cho không gian sống của mình.\n\nShowroom mới không chỉ là nơi trưng bày sản phẩm mà còn là một trung tâm tư vấn thiết kế toàn diện. Khách hàng khi đến tham quan sẽ được đội ngũ kiến trúc sư chuyên nghiệp của chúng tôi tư vấn về cách phối hợp màu sắc, lựa chọn vật liệu và bố trí không gian sao cho tối ưu nhất. Chúng tôi cũng dành riêng một khu vực làm việc để khách hàng và kiến trúc sư có thể thảo luận trực tiếp trên các bản vẽ 3D trực quan.\n\nViệc mở rộng hệ thống showroom tại miền Nam khẳng định cam kết của Huy Hào trong việc mang đến những sản phẩm nội thất gỗ cao cấp và dịch vụ hậu mãi chuyên nghiệp nhất tới khách hàng trên toàn quốc. Sự ủng hộ và tin tưởng của quý khách hàng chính là động lực to lớn nhất để chúng tôi không ngừng nỗ lực, sáng tạo và phát triển bền vững trong tương lai.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    date: '10 Thg 02, 2026',
    category: 'Sự Kiện'
  }
];

export function News() {
  const [selectedArticle, setSelectedArticle] = useState<typeof NEWS_ARTICLES[0] | null>(null);

  if (selectedArticle) {
    return (
      <div className="pt-48 pb-24 bg-white min-h-screen font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setSelectedArticle(null)}
            className="flex items-center gap-2 text-brand-primary font-bold uppercase tracking-widest text-sm mb-8 hover:text-brand-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại danh sách
          </button>
          
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
               <div className="bg-brand-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-primary">
                 {selectedArticle.category}
               </div>
               <div className="flex items-center gap-2 text-brand-dark/50 text-xs uppercase tracking-wider font-semibold">
                 <Calendar className="w-3 h-3" />
                 <span>{selectedArticle.date}</span>
               </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6 leading-tight">
              {selectedArticle.title}
            </h1>
            <p className="text-xl text-gray-500 font-medium italic mb-8">
              {selectedArticle.excerpt}
            </p>
          </div>

          <div className="w-full aspect-video rounded-sm overflow-hidden mb-12">
            <img 
              src={selectedArticle.image} 
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-sans mb-16">
            <p className="whitespace-pre-line">{selectedArticle.content}</p>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex justify-between items-center">
            <div className="text-brand-dark font-serif text-xl border-l-4 border-brand-primary pl-4">
              Huy Hào Furniture
            </div>
            <div className="flex gap-4">
              {/* Share buttons or tags could go here */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-48 pb-24 bg-white min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-6">Tin Tức & Sự Kiện</h1>
          <p className="text-brand-dark/70 text-lg leading-relaxed">
            Cập nhật những thông tin mới nhất về thị trường nội thất, phong cách thiết kế và những câu chuyện đằng sau các kiệt tác của chúng tôi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {NEWS_ARTICLES.map((article, index) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index % 3 * 0.1, duration: 0.6 }}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer flex flex-col h-full bg-brand-bg/30 border border-brand-primary/10 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-primary shadow-sm">
                  {article.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-brand-dark/50 text-xs mb-4 uppercase tracking-wider font-semibold">
                  <Calendar className="w-3 h-3" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-brand-dark/70 text-sm leading-relaxed mb-6 flex-grow">
                  {article.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-dark group-hover:text-brand-primary transition-colors">
                    Đọc thêm <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
