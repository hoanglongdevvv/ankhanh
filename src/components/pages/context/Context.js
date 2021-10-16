import React, { createContext } from 'react'
import faker from 'faker'
import { cartReducer, productReducer } from './Producers'
import { useReducer, useContext } from 'react';

const Cart = createContext();
faker.seed(99);

const Context = ({ children }) => {
    const products = [
        {
            id: faker.datatype.uuid(),
            name: 'KAWASAKI H2R',
            price: '1275000000',
            image: "/images/moto-h2r1.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([3]),
            texthang: 'Hãng: KAWASAKI',
            text: "Kawasaki H2R sau một thời gian dài chinh phục ngôi vương trên đường đua mới đây đã chính thức được Kawasaki xác nhận sẽ sớm ngừng sản xuất. Những chiếc Kawasaki H2R chính hãng 2021 cuối cùng dự kiến sẽ được giao cho khách hàng đã đặt hàng trong năm nay.Hãng xe Nhật Bản cho biết hiện đã ngừng sản xuất mẫu xe Kawasaki Ninja H2R kể từ tháng 10/2020, hãng đã nhận đợt đặt hàng cuối cùng từ 20/9 cho tới 21/10/2020.Đây có lẽ là một thông tin khá bất ngờ và gây nhiều tiếc nuối, nhất là đối với các tín đồ đam mê tốc độ trên toàn thế giới.",
        },
        {
            id: faker.datatype.uuid(),
            name: 'BMW S1000RR',
            price: '279000000',
            image: "/images/moto-bmws1000rr2.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([5]),
            texthang: 'Hãng: KAWASAKI',
            text: "Kawasaki H2R sau một thời gian dài chinh phục ngôi vương trên đường đua mới đây đã chính thức được Kawasaki xác nhận sẽ sớm ngừng sản xuất. Những chiếc Kawasaki H2R chính hãng 2021 cuối cùng dự kiến sẽ được giao cho khách hàng đã đặt hàng trong năm nay.Hãng xe Nhật Bản cho biết hiện đã ngừng sản xuất mẫu xe Kawasaki Ninja H2R kể từ tháng 10/2020, hãng đã nhận đợt đặt hàng cuối cùng từ 20/9 cho tới 21/10/2020.Đây có lẽ là một thông tin khá bất ngờ và gây nhiều tiếc nuối, nhất là đối với các tín đồ đam mê tốc độ trên toàn thế giới.",
        },
        {
            id: faker.datatype.uuid(),
            name: 'DUCATI PANIGALE V2 2020',
            price: '298000000',
            image: "/images/moto-dctPanigalev220205.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([4]),
            texthang: 'Hãng: KAWASAKI',
            text: "Kawasaki H2R sau một thời gian dài chinh phục ngôi vương trên đường đua mới đây đã chính thức được Kawasaki xác nhận sẽ sớm ngừng sản xuất. Những chiếc Kawasaki H2R chính hãng 2021 cuối cùng dự kiến sẽ được giao cho khách hàng đã đặt hàng trong năm nay.Hãng xe Nhật Bản cho biết hiện đã ngừng sản xuất mẫu xe Kawasaki Ninja H2R kể từ tháng 10/2020, hãng đã nhận đợt đặt hàng cuối cùng từ 20/9 cho tới 21/10/2020.Đây có lẽ là một thông tin khá bất ngờ và gây nhiều tiếc nuối, nhất là đối với các tín đồ đam mê tốc độ trên toàn thế giới.",
        },
        {
            id: faker.datatype.uuid(),
            name: 'KAWASAKI Z100ABS 2017',
            price: '189000000',
            image: "/images/moto-kwskz100abs2017.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([3]),
            texthang: 'Hãng: KAWASAKI',
            text: "Kawasaki H2R sau một thời gian dài chinh phục ngôi vương trên đường đua mới đây đã chính thức được Kawasaki xác nhận sẽ sớm ngừng sản xuất. Những chiếc Kawasaki H2R chính hãng 2021 cuối cùng dự kiến sẽ được giao cho khách hàng đã đặt hàng trong năm nay.Hãng xe Nhật Bản cho biết hiện đã ngừng sản xuất mẫu xe Kawasaki Ninja H2R kể từ tháng 10/2020, hãng đã nhận đợt đặt hàng cuối cùng từ 20/9 cho tới 21/10/2020.Đây có lẽ là một thông tin khá bất ngờ và gây nhiều tiếc nuối, nhất là đối với các tín đồ đam mê tốc độ trên toàn thế giới.",
        },
        {
            id: faker.datatype.uuid(),
            name: 'YAMAHA MT-03 ABS',
            price: '490000000',
            image: "/images/moto-ymhmt-03abs3.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([3]),
            texthang: 'Hãng: KAWASAKI',
            text: "Kawasaki H2R sau một thời gian dài chinh phục ngôi vương trên đường đua mới đây đã chính thức được Kawasaki xác nhận sẽ sớm ngừng sản xuất. Những chiếc Kawasaki H2R chính hãng 2021 cuối cùng dự kiến sẽ được giao cho khách hàng đã đặt hàng trong năm nay.Hãng xe Nhật Bản cho biết hiện đã ngừng sản xuất mẫu xe Kawasaki Ninja H2R kể từ tháng 10/2020, hãng đã nhận đợt đặt hàng cuối cùng từ 20/9 cho tới 21/10/2020.Đây có lẽ là một thông tin khá bất ngờ và gây nhiều tiếc nuối, nhất là đối với các tín đồ đam mê tốc độ trên toàn thế giới.",
        },
        {
            id: faker.datatype.uuid(),
            name: 'YAMAHA YZX R15',
            price: '357000000',
            image: "/images/moto-yzxr154.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([3]),
            texthang: 'Hãng: KAWASAKI',
            text: "Kawasaki H2R sau một thời gian dài chinh phục ngôi vương trên đường đua mới đây đã chính thức được Kawasaki xác nhận sẽ sớm ngừng sản xuất. Những chiếc Kawasaki H2R chính hãng 2021 cuối cùng dự kiến sẽ được giao cho khách hàng đã đặt hàng trong năm nay.Hãng xe Nhật Bản cho biết hiện đã ngừng sản xuất mẫu xe Kawasaki Ninja H2R kể từ tháng 10/2020, hãng đã nhận đợt đặt hàng cuối cùng từ 20/9 cho tới 21/10/2020.Đây có lẽ là một thông tin khá bất ngờ và gây nhiều tiếc nuối, nhất là đối với các tín đồ đam mê tốc độ trên toàn thế giới.",

        },
        {
            id: faker.datatype.uuid(),
            name: 'KAWASAKI Z1000ABS',
            price: '157000000',
            image: "/images/moto-kwskz1000abs.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([4]),
            texthang: 'Hãng: KAWASAKI',
            text: "Kawasaki H2R sau một thời gian dài chinh phục ngôi vương trên đường đua mới đây đã chính thức được Kawasaki xác nhận sẽ sớm ngừng sản xuất. Những chiếc Kawasaki H2R chính hãng 2021 cuối cùng dự kiến sẽ được giao cho khách hàng đã đặt hàng trong năm nay.Hãng xe Nhật Bản cho biết hiện đã ngừng sản xuất mẫu xe Kawasaki Ninja H2R kể từ tháng 10/2020, hãng đã nhận đợt đặt hàng cuối cùng từ 20/9 cho tới 21/10/2020.Đây có lẽ là một thông tin khá bất ngờ và gây nhiều tiếc nuối, nhất là đối với các tín đồ đam mê tốc độ trên toàn thế giới.",
        },
        {
            id: faker.datatype.uuid(),
            name: 'HONDA CB350RS',
            price: '450000000',
            image: "/images/moto-hondacb350rs.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([5]),
            texthang: 'Hãng: KAWASAKI',
            text: "Kawasaki H2R sau một thời gian dài chinh phục ngôi vương trên đường đua mới đây đã chính thức được Kawasaki xác nhận sẽ sớm ngừng sản xuất. Những chiếc Kawasaki H2R chính hãng 2021 cuối cùng dự kiến sẽ được giao cho khách hàng đã đặt hàng trong năm nay.Hãng xe Nhật Bản cho biết hiện đã ngừng sản xuất mẫu xe Kawasaki Ninja H2R kể từ tháng 10/2020, hãng đã nhận đợt đặt hàng cuối cùng từ 20/9 cho tới 21/10/2020.Đây có lẽ là một thông tin khá bất ngờ và gây nhiều tiếc nuối, nhất là đối với các tín đồ đam mê tốc độ trên toàn thế giới.",
        },
        {
            id: faker.datatype.uuid(),
            name: 'KAWASAKI Z1000ABS',
            price: '500000000',
            image: "/images/moto-kwskz1000abs.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([ 4]),
            texthang: 'Hãng: KAWASAKI',
            text: "Kawasaki H2R sau một thời gian dài chinh phục ngôi vương trên đường đua mới đây đã chính thức được Kawasaki xác nhận sẽ sớm ngừng sản xuất. Những chiếc Kawasaki H2R chính hãng 2021 cuối cùng dự kiến sẽ được giao cho khách hàng đã đặt hàng trong năm nay.Hãng xe Nhật Bản cho biết hiện đã ngừng sản xuất mẫu xe Kawasaki Ninja H2R kể từ tháng 10/2020, hãng đã nhận đợt đặt hàng cuối cùng từ 20/9 cho tới 21/10/2020.Đây có lẽ là một thông tin khá bất ngờ và gây nhiều tiếc nuối, nhất là đối với các tín đồ đam mê tốc độ trên toàn thế giới.",
        },
        {
            id: faker.datatype.uuid(),
            name: 'YAMAHA YZX R15',
            price: '250000000',
            image: "/images/moto-yzxr154.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([5]),
            texthang: 'Hãng: KAWASAKI',
            text: "Kawasaki H2R sau một thời gian dài chinh phục ngôi vương trên đường đua mới đây đã chính thức được Kawasaki xác nhận sẽ sớm ngừng sản xuất. Những chiếc Kawasaki H2R chính hãng 2021 cuối cùng dự kiến sẽ được giao cho khách hàng đã đặt hàng trong năm nay.Hãng xe Nhật Bản cho biết hiện đã ngừng sản xuất mẫu xe Kawasaki Ninja H2R kể từ tháng 10/2020, hãng đã nhận đợt đặt hàng cuối cùng từ 20/9 cho tới 21/10/2020.Đây có lẽ là một thông tin khá bất ngờ và gây nhiều tiếc nuối, nhất là đối với các tín đồ đam mê tốc độ trên toàn thế giới.",

        },

        {
            id: faker.datatype.uuid(),
            name: 'HONDA CB350RS',
            price: '157000000',
            image: "/images/moto-hondacb350rs.jpg",
            inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
            fastDelivery: faker.datatype.boolean(),
            ratings: faker.random.arrayElement([4]),
            texthang: 'Hãng: KAWASAKI',
            text: "Kawasaki H2R sau một thời gian dài chinh phục ngôi vương trên đường đua mới đây đã chính thức được Kawasaki xác nhận sẽ sớm ngừng sản xuất. Những chiếc Kawasaki H2R chính hãng 2021 cuối cùng dự kiến sẽ được giao cho khách hàng đã đặt hàng trong năm nay.Hãng xe Nhật Bản cho biết hiện đã ngừng sản xuất mẫu xe Kawasaki Ninja H2R kể từ tháng 10/2020, hãng đã nhận đợt đặt hàng cuối cùng từ 20/9 cho tới 21/10/2020.Đây có lẽ là một thông tin khá bất ngờ và gây nhiều tiếc nuối, nhất là đối với các tín đồ đam mê tốc độ trên toàn thế giới.",
        },
    ]

    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart: []
    })

    const [productState, productDispatch] = useReducer(productReducer, {
        byStock: false,
        byFastDelivery: false,
        byRating: 0,
        searchQuery: "",
    });

    return (
        <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
            {children}
        </Cart.Provider>
    )
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
};
