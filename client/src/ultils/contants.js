import path from "./path"
import icons from "./icons"

export const navigation = [
  {
    id: 1,
    value: "HOME",
    path: `/${path.HOME}`,
  },
  {
    id: 2,
    value: "PRODUCTS",
    path: `/${path.PRODUCTS}`,
  },
  {
    id: 3,
    value: "BLOGS",
    path: `/${path.BLOGS}`,
  },
  {
    id: 4,
    value: "OUR SERVICES",
    path: `/${path.OUR_SERVICES}`,
  },
  {
    id: 5,
    value: "FAQs",
    path: `/${path.FAQ}`,
  },
]
const { RiTruckFill, BsShieldShaded, BsReplyFill, FaTty, AiFillGift } = icons
export const productExtraInfomation = [
  {
    id: "1",
    title: "Guarantee",
    sub: "Quality Checked",
    icon: <BsShieldShaded />,
  },
  {
    id: "2",
    title: "Free Shipping",
    sub: "Free On All Products",
    icon: <RiTruckFill />,
  },
  {
    id: "3",
    title: "Special Gift Cards",
    sub: "Special Gift Cards",
    icon: <AiFillGift />,
  },
  {
    id: "4",
    title: "Free Return",
    sub: "Within 7 Days",
    icon: <BsReplyFill />,
  },
  {
    id: "5",
    title: "Consultancy",
    sub: "Lifetime 24/7/356",
    icon: <FaTty />,
  },
]

export const productInfoTabs = [
  {
    id: 1,
    name: "DISCRIPTION",
    content: `Xe máy là một phương tiện vận chuyển phức tạp với nhiều hệ thống và bộ phận liên kết chặt chẽ. Mỗi hệ thống có vai trò quan trọng trong việc đảm bảo hiệu suất, an toàn và sự thoải mái khi sử dụng. Dưới đây là các bộ phận chính của cấu tạo xe máy và chức năng của chúng:
    Động cơ: Là trái tim của xe, động cơ thực hiện việc đốt cháy nhiên liệu để tạo ra năng lượng cho xe. Động cơ bao gồm nhiều bộ phận như hệ thống cung cấp nhiên liệu, hệ thống đánh lửa, hệ thống làm mát và làm trơn. Động cơ có thể được phân loại thành hai loại chính: động cơ 2 thì và động cơ 4 thì.
    Hệ thống truyền động: Chuyển năng lượng từ động cơ đến bánh xe để xe có thể di chuyển. Hệ thống này gồm có bộ ly hợp, xích tải hoặc dây đai (tùy vào dòng xe), bánh răng và trục truyền động.
    Hệ thống di chuyển: Gồm các bộ phận như bánh trước, bánh sau, hệ thống nhún (giảm xóc) và khung xe. Những bộ phận này giúp chuyển động quay của hệ truyền động thành chuyển động tiến, đồng thời hấp thụ chấn động để xe di chuyển êm ái hơn trên đường.
    Hệ thống điều khiển: Cho phép người lái kiểm soát hướng và tốc độ của xe. Hệ thống này bao gồm tay lái, phanh (trước và sau), bàn đạp hoặc tay phanh, giúp xe có thể chạy chậm lại hoặc dừng lại khi cần thiết.
    Hệ thống điện và tín hiệu: Bao gồm ắc quy, đèn chiếu sáng (đèn pha, đèn hậu, đèn xi nhan) và còi. Hệ thống này đảm bảo các tín hiệu cần thiết khi xe di chuyển trong điều kiện ban đêm hoặc nơi đông người, giúp người lái và các phương tiện khác trên đường biết được hướng đi và ý định dừng của xe.`,
  },
  {
    id: 2,
    name: "WARRANTY",
    content: `THÔNG TIN BẢO HÀNH BẢO HÀNH CÓ GIỚI HẠN
     Bảo hành có giới hạn không được chuyển nhượng. Các Bảo hành có giới hạn sau đây được trao cho người mua lẻ ban đầu của các Sản phẩm sau của Ashley Furniture Industries, Inc.: Khung được sử dụng trong các sản phẩm bọc và da Bảo hành trọn đời có giới hạn Bảo hành trọn đời có giới hạn áp dụng cho tất cả các khung được sử dụng trong ghế sofa, ghế dài, ghế tình nhân, ghế bọc, ghế đôn, ghế dài và giường ngủ. Ashley Furniture Industries, Inc. bảo hành các thành phần này cho bạn, người mua lẻ ban đầu, không có lỗi sản xuất vật liệu.`,
  },
  {
    id: 3,
    name: "DELIVERY",
    content: `MUA HÀNG & GIAO HÀNG
    Trước khi mua hàng, bạn nên biết số đo của khu vực bạn định đặt đồ nội thất. Bạn cũng nên đo mọi lối ra vào và hành lang mà đồ nội thất sẽ đi qua để đến đích cuối cùng.
    Nhận hàng tại cửa hàng
    Shopify Shop yêu cầu tất cả các sản phẩm phải được kiểm tra đúng cách TRƯỚC KHI bạn mang về nhà để đảm bảo không có bất kỳ điều gì bất ngờ. Đội ngũ của chúng tôi rất vui lòng mở tất cả các gói hàng và sẽ hỗ trợ trong quá trình kiểm tra. Sau đó, chúng tôi sẽ niêm phong lại các gói hàng để vận chuyển an toàn. Chúng tôi khuyến khích tất cả khách hàng mang theo miếng lót hoặc chăn để bảo vệ đồ đạc trong quá trình vận chuyển cũng như dây thừng hoặc dây buộc. Shopify Shop sẽ không chịu trách nhiệm về thiệt hại xảy ra sau khi rời khỏi cửa hàng hoặc trong quá trình vận chuyển. Người mua có trách nhiệm đảm bảo rằng các mặt hàng chính xác được nhận và trong tình trạng tốt.
    Giao hàng
    Khách hàng có thể chọn ngày giao hàng tiếp theo phù hợp nhất với lịch trình của mình. Tuy nhiên, để định tuyến các điểm dừng hiệu quả nhất có thể, Shopify Shop sẽ cung cấp khung thời gian. Khách hàng sẽ không thể chọn thời gian. Bạn sẽ được thông báo trước về khung thời gian đã lên lịch. Vui lòng đảm bảo rằng một người lớn có trách nhiệm (18 tuổi trở lên) sẽ ở nhà vào thời điểm đó.
    Để chuẩn bị cho việc giao hàng, vui lòng dọn đồ nội thất, tranh ảnh, gương, phụ kiện, v.v. hiện có để tránh hư hỏng. Ngoài ra, hãy đảm bảo rằng khu vực bạn muốn đặt đồ nội thất không có đồ nội thất cũ và bất kỳ vật dụng nào khác có thể cản trở lối đi của nhóm giao hàng. Shopify Shop sẽ giao, lắp ráp và thiết lập đồ nội thất mới bạn mua và dọn sạch mọi vật liệu đóng gói khỏi nhà bạn. Đội ngũ giao hàng của chúng tôi không được phép di chuyển đồ nội thất hiện có hoặc các đồ gia dụng khác của bạn. Nhân viên giao hàng sẽ cố gắng giao các mặt hàng đã mua một cách an toàn và có kiểm soát nhưng sẽ không cố gắng đặt đồ nội thất nếu họ cảm thấy việc đó sẽ gây hư hỏng cho sản phẩm hoặc ngôi nhà của bạn. Nhân viên giao hàng không được tháo cửa, nâng đồ nội thất hoặc mang đồ nội thất lên hơn 3 tầng cầu thang. Phải có thang máy để giao hàng lên tầng 4 trở lên.`,
  },
  {
    id: 4,
    name: "PAYMENT",
    content: `
        Khách hàng có thể chọn ngày giao hàng tiếp theo phù hợp nhất với lịch trình của mình. Tuy nhiên, để định tuyến các điểm dừng hiệu quả nhất có thể, Shopify Shop sẽ cung cấp khung thời gian. Khách hàng sẽ không thể chọn thời gian. Bạn sẽ được thông báo trước về khung thời gian đã lên lịch. Vui lòng đảm bảo rằng một người lớn có trách nhiệm (18 tuổi trở lên) sẽ có mặt tại nhà vào thời điểm đó.
        Để chuẩn bị cho việc giao hàng, vui lòng dọn đồ nội thất, tranh ảnh, gương, phụ kiện hiện có, v.v. để tránh hư hỏng. Ngoài ra, hãy đảm bảo rằng khu vực bạn muốn đặt đồ nội thất không có đồ nội thất cũ và bất kỳ vật dụng nào khác có thể cản trở lối đi của nhóm giao hàng. Shopify Shop sẽ giao, lắp ráp và thiết lập đồ nội thất mới bạn mua và dọn sạch mọi vật liệu đóng gói khỏi nhà bạn. Đội ngũ giao hàng của chúng tôi không được phép di chuyển đồ nội thất hiện có hoặc các đồ gia dụng khác của bạn. Nhân viên giao hàng sẽ cố gắng giao các mặt hàng đã mua một cách an toàn và có kiểm soát nhưng sẽ không cố gắng đặt đồ nội thất nếu họ cảm thấy điều đó sẽ gây hư hỏng cho sản phẩm hoặc ngôi nhà của bạn. Nhân viên giao hàng không được tháo cửa, nâng đồ nội thất hoặc mang đồ nội thất lên hơn 3 tầng cầu thang. Phải có thang máy để giao hàng lên tầng 4 trở lên.`,
  },
]

export const colors = [
  "black",
  "brown",
  "gray",
  "white",
  "pink",
  "yellow",
  "orange",
  "purple",
  "green",
  "blue",
]

export const sorts = [
  {
    id: 1,
    value: "-sold",
    text: "Best selling",
  },
  {
    id: 2,
    value: "title",
    text: "Alphabetically, A-Z",
  },
  {
    id: 3,
    value: "-title",
    text: "Alphabetically, Z-A",    
  },
  {
    id: 4,
    value: "-price",
    text: "Price, high to low",
  },
  {
    id: 5,
    value: "price",
    text: "Price, low to high",
  },
  {
    id: 6,
    value: "-createdAt",
    text: "Date, new to old",
  },
  {
    id: 7,
    value: "createdAt",
    text: "Date, old to new",
  },
]

export const voteOptions = [
  {
    id: 1,
    text: "Terrible",
  },
  {
    id: 2,
    text: "Bad",
  },
  {
    id: 3,
    text: "Neutral",
  },

  {
    id: 4,
    text: "Good",
  },

  {
    id: 5,
    text: "Perfect",
  },
]
const { AiOutlineDashboard, MdGroups, TbBrandProducthunt, RiBillLine } = icons
export const adminSidebar = [
  {
    id: 1,
    type: "SINGLE",
    text: "Dashboard",
    path: `/${path.ADMIN}/${path.DASHBOARD}`,
    icon: <AiOutlineDashboard size={20} />,
  },
  {
    id: 2,
    type: "SINGLE",
    text: "Manage users",
    path: `/${path.ADMIN}/${path.MANAGE_USER}`,
    icon: <MdGroups size={20} />,
  },
  {
    id: 3,
    type: "PARENT",
    text: "Products",
    icon: <TbBrandProducthunt size={20} />,
    submenu: [
      {
        text: "Create product",
        path: `/${path.ADMIN}/${path.CREATE_PRODUCTS}`,
      },
      {
        text: "Manage products",
        path: `/${path.ADMIN}/${path.MANAGE_PRODUCTS}`,
      },
    ],
  },
  {
    id: 4,
    type: "SINGLE",
    text: "Manage orders",
    path: `/${path.ADMIN}/${path.MANAGE_ORDER}`,
    icon: <RiBillLine size={20} />,
  },
  {
    id: 31,
    type: "PARENT",
    text: "Blogs",
    icon: <TbBrandProducthunt size={20} />,
    submenu: [
      {
        text: "Create blog",
        path: `/${path.ADMIN}/${path.CREATE_BLOG}`,
      },
      {
        text: "Manage blogs",
        path: `/${path.ADMIN}/${path.MANAGE_BLOGS}`,
      },
    ],
  },
]
export const memberSidebar = [
  {
    id: 1,
    type: "SINGLE",
    text: "Personal",
    path: `/${path.MEMBER}/${path.PERSONAL}`,
    icon: <AiOutlineDashboard size={20} />,
  },
  {
    id: 2,
    type: "SINGLE",
    text: "My cart",
    path: `/${path.MEMBER}/${path.MY_CART}`,
    icon: <MdGroups size={20} />,
  },
  {
    id: 4,
    type: "SINGLE",
    text: "Buy histories",
    path: `/${path.MEMBER}/${path.HISTORY}`,
    icon: <RiBillLine size={20} />,
  },
  {
    id: 40,
    type: "SINGLE",
    text: "Wishlist",
    path: `/${path.MEMBER}/${path.WISHLIST}`,
    icon: <RiBillLine size={20} />,
  },
]

export const roles = [
  {
    code: 1945,
    value: "Admin",
  },
  {
    code: 1979,
    value: "User",
  },
]
export const blockStatus = [
  {
    code: true,
    value: "Blocked",
  },
  {
    code: false,
    value: "Active",
  },
]
export const statusOrders = [
  {
    label: "Cancalled",
    value: "Cancalled",
  },
  {
    label: "Succeed",
    value: "Succeed",
  },
]
