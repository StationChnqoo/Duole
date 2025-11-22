## 美团 RN 热更新

版本：11.1.402

时间：2020.08.20

组件库：https://github.com/Meituan-Dianping/beeshell/tree/master

```bash
curl -X POST 'https://apimobile.meituan.com/appupdate/mach/checkUpdate?utm_source=wandoujia&utm_medium=android&utm_term=1100010402&version_name=11.1.402&utm_content=6d6a8ac7fb16483385b4dee83e62b03da176376566949508337&utm_campaign=AgroupBgroupC0E0Ghomepage&ci=1280&msid=DeviceId01763797645981&uuid=0000000000000C730332BF5374D5996A9653E61BAF498A176376567727210179&lat=32.095766&lng=118.780663&userid=-1&__reqTraceID=91dcea3d-cc31-41ba-b47c-867b31992026&__skck=8f5973b085446090f224af74e30e0181&__skts=1763798290&__skua=335b0c73deeca1c27a7b51240f942cf1&__skno=28055528-1725-4e59-adb5-4d745711563c&__skcy=xRfIi8tVszw16OGVPI1M2j1P28I%3D' -H 'User-Agent: AiMeiTuan /Xiaomi-10-MI 8 UD-2029x1080-440-11.1.402-1100010402-DeviceId0-wandoujia' -H 'Connection: Keep-Alive' -H 'Accept-Encoding: gzip' -H 'Content-Type: application/json' -H 'retrofit_exec_time: 1763798290754' -H 'request-belong: com.meituan.android.pt.homepage.activity.MainActivity' -H 'pragma-os: MApi 1.1 com.sankuai.meituan 11.1.402 wandoujia MI_8_UD; Android 10' -H 'pragma-mtid: 6d6a8ac7fb16483385b4dee83e62b03da176376566949508337' -H 'siua: syqDmJw/KAqTJUZZhhApHShNYZ71sXzHTKU8Bt8/4/TTdHbmfk4wY0uNAN3+pg8vzwEQWlOoQwxgXRANnEvD/J0ODvePU2aE4EaeCmqsRfXGh+qzvKzVyWTCnZlKtCRZfHwvNB4mMT4en2a11NNazmFO3V38V1h+9r+o0ybmbxMLleAnp+WcYaFVgd/5oBnbdKXV6ttkmP0c3eN6NURvbdSwZv8dTbW3SImKFpWVPiQrLespmT1kO0AXvgtl97me402MvZDhrD2EmfzGXzTyv9yJ/oiWA83WlbGhiolu4SdqnXlbO7zveNjDBpE6KlmcYJU/zUPsmeW4PJJca6ipWeQKIFkqveOq3KtAfvHoq9bQ9co3j99NNXL2aWIZInWptICJOwScR0qy3KoMjpAOfPVQDCieENE1ZqwFUVgOfQ5Kv9/5VaX5QM/PSfX5aDBMz7U+J/QUD0f1uMVn5iy8CVnnyhP5OIUx9+PPhEi3vqceehzvLuAG3aAmDVUBM7RKi4js1wnbOvDt/r1bWrmnDwmdyJU9wJxjQWQzF+PLzbIDoJUgiTVwOJBCUvgD9x1gguFRYOnkDtnAF7nyVGnZOcwqXJYcNoWuK3PqQjyQA4Q=' -H 'M-SHARK-TRACEID: 1010000000000000C730332BF5374D5996A9653E61BAF498A176376567727210179416975176379829083559dd93' -H 'mtgdid: AAAAAAAAAAAAAHqlRuP8UXG2j6MHOog0IV39MDgtbOMjeASrvtg3ELjnAWjXOORRaf29K6p0XMAudgiZL3Rtw4rwIUIrUyY-eIU' -H 'userid: -1' -H 'Content-Type: application/json; charset=UTF-8' -d '{"app":"group","app_version":"1100010402","bundles":[],"mach_version":"1.0.0","platform":"Android","uuid":"0000000000000C730332BF5374D5996A9653E61BAF498A176376567727210179"}' --http1.1
```

```json
{
  "body": {
    "bundles": [
      {
        "bundleName": "mach_shangou-supermarket-platinum-cpm-recommend-dishes-carousel",
        "bundleVersion": "0.0.9",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/2507/438604/mach_shangou-supermarket-platinum-cpm-recommend-dishes-carousel__0.0.9.dio.zip",
        "mach_id": "supermarket-persuade-coupon",
        "md5": "d2b7bd0402edbbb2ac871a86d84a4742",
        "tags": "supermarket_homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/3344c9d07e2411eaa6a8eff877713ab9.zip",
        "version": "0.0.9"
      },
      {
        "bundleName": "mach_waimai-marketing-sumbit-order-poicoupon-pkgdetail",
        "bundleVersion": "0.0.1",
        "mach_id": "wm-submit-order-poi-coupon-package-detail-style-1",
        "md5": "9cc30a7123fbadb981aeb75a1429b108",
        "tags": "",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/276be16099a011eab62e57f22b99f1ea.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-order-order_confirm_food_info_elderly-style_1",
        "bundleVersion": "0.0.1",
        "mach_id": "waimai_order_order_confirm_food_info_elderly_style_1",
        "md5": "8bb79b29ec84ae05f72d68195c93a256",
        "tags": "waimai-order;waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/2f6cf1000bce11ec8c86b982ed23eb71.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-ad-platinum-cpm-recommend-dishes",
        "bundleType": "0",
        "bundleVersion": "0.0.42",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/869/4086769/mach_waimai-ad-platinum-cpm-recommend-dishes__0.0.42.dio.zip",
        "mach_id": "pt-dcopt-temp-56",
        "md5": "33b8de2d41aba048b7b3bb6c0848f32e",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/1d1830e0c3f211ed903f7782fca1ac8d.zip",
        "version": "0.0.42"
      },
      {
        "bundleName": "mach_waimai-order-order_status_delivery_info-style_1",
        "bundleVersion": "0.0.2",
        "mach_id": "waimai_order_order_status_delivery_info_style_1",
        "md5": "4b5d2ab339e98f7ecea8406dbbfb1241",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/fc84c440d75a11eb8c9d8f3c9e480267.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-order-order_status_group_entrance-style_1",
        "bundleVersion": "0.0.3",
        "mach_id": "waimai_order_order_status_group_entrance_style_1",
        "md5": "2ed5307b29b997996ea38ffdba56e0cd",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/961b32a0d75c11eb8d1d8bc37124d890.zip",
        "version": "0.0.3"
      },
      {
        "bundleName": "mach_shangou-supermarket-super-message-coupon-banner-style-1",
        "bundleVersion": "0.0.4",
        "mach_id": "supermarket-super-message-coupon-banner",
        "md5": "2804ca93852ce4b4fce42fb4eb7ac209",
        "tags": "supermarket_homepage;supermarket_poi;supermarket_goodsdetail",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/697e34f0db8a11ea98a857ead4a331c8.zip",
        "version": "0.0.4"
      },
      {
        "bundleName": "mach_waimai-order-order_status_food_info-style_1",
        "bundleVersion": "0.0.4",
        "mach_id": "waimai_order_order_status_food_info_style_1",
        "md5": "2dd0645f2c15852200bf1fc28a1594fb",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/b0510690f5e811ebb74ec926581a1983.zip",
        "version": "0.0.4"
      },
      {
        "bundleName": "mach_waimai-marketing-sumbit-order-upgradepackage-style-1-opt",
        "bundleVersion": "0.0.2",
        "mach_id": "wm-submit-order-membership-upgrade-style-1-optimization",
        "md5": "6aade0cebb3c2e3b240c39035ae7324b",
        "tags": "waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/4a34adb05c8a11eaaf73cb3991d8c872.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-ad-tj-heaven-activity-cards",
        "bundleType": "0",
        "bundleVersion": "0.0.10",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/869/2530265/mach_waimai-ad-tj-heaven-activity-cards__0.0.10.dio.zip",
        "mach_id": "mach_waimai-ad-tj-heaven-activity-cards",
        "md5": "19c2751929778d7a118139f77226bcdd",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/087c2500bc9711ec98be2397072977c2.zip",
        "version": "0.0.10"
      },
      {
        "bundleName": "mach_waimai-order-order_confirm_service_guarantee-style_1",
        "bundleVersion": "0.0.2",
        "mach_id": "waimai_order_order_confirm_service_guarantee_style_1",
        "md5": "eccb3a79aab965bbe3fb73471283eab5",
        "tags": "waimai-homepage;waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/89c92a60fc1f11eb8e4de33f80db9254.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-order-order_confirm_close_info_elderly-style_1",
        "bundleVersion": "0.0.1",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/8100/1603158/mach_waimai-order-order_confirm_close_info_elderly-style_1__0.0.1.dio.zip",
        "mach_id": "waimai_order_order_confirm_close_info_elderly_style_1",
        "md5": "5fc676f425ab9761e1fc7bb28d7126dd",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/a9f946900bcd11ecb0e0874b6662d0e0.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_shangou-supermarket-on-arrival-style-1",
        "bundleType": "0",
        "bundleVersion": "0.0.3",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/2507/2397004/mach_shangou-supermarket-on-arrival-style-1__0.0.3.dio.zip",
        "mach_id": "supermarket-on-arrival-1",
        "md5": "ec86bbe780d2943f15c628302cf4ebbd",
        "tags": "supermarket_homepage;sg_homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/101c49f0a5f611ec80926d47088e5ea5.zip",
        "version": "0.0.3"
      },
      {
        "bundleName": "mach_waimai-order-order_status_protect_plan-style_1",
        "bundleVersion": "0.0.1",
        "mach_id": "waimai_order_order_status_protect_plan_style_1",
        "md5": "df237663bf52783f6bdd1e6fd714416f",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/05fb8170c91f11eba56a85ac46aae4fb.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-order-status_operatearea_bottomarea-style_1",
        "bundleVersion": "0.0.2",
        "mach_id": "waimai_order_status_operatearea_bottomarea_style_1",
        "md5": "db11022b9a5affcd1e248566661c6f20",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/48c72aa0d75b11eb99568bb974e2e791.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-usercenter-homepage-poi-recommend",
        "bundleVersion": "0.0.1",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/1652/384809/mach_waimai-usercenter-homepage-poi-recommend__0.0.1.dio.zip",
        "mach_id": "waimai-usercenter-homepage-poi-recommend-style-0",
        "md5": "b322b93ca7ce2b0e8da26cea02a5ebe4",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/18c49f10732311ea98cb35799be3f0f2.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-marketing-homepage-newuser-card",
        "bundleVersion": "0.0.6",
        "mach_id": "waimai-marketing-homepage-newuser-card",
        "md5": "78616644298d948150aec0f4555daac9",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/13c640600acb11ea9771f7c324e52371.zip",
        "version": "0.0.6"
      },
      {
        "bundleName": "mach_shangou-supermarket-drug-detail-delivery-style-1",
        "bundleVersion": "0.0.2",
        "mach_id": "supermarket-drug-detail-delivery",
        "md5": "75382fef417cc08feefa970430f933b7",
        "tags": "supermarket_homepage;supermarket_goodsdetail",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/1ef10520d27511eabcd35743af5ca9ad.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-ad-search-search-theme-native-style-no-dishes",
        "bundleType": "0",
        "bundleVersion": "0.0.2",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/869/2532152/mach_waimai-ad-search-search-theme-native-style-no-dishes__0.0.2.dio.zip",
        "mach_id": "search-theme-native-style-no-dishes",
        "md5": "b40591fd780b9de7fb274c611d5f2106",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/1ce9bb80bcc211ecb6762513fd498b0e.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-marketing-restaurant-collect-reward",
        "bundleVersion": "0.0.3",
        "mach_id": "waimai-mach-marketing-restaurant-collect-reward",
        "md5": "260919e14b13d78405c34f2d3772f812",
        "tags": "",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/a1725170c02811eab53e293574a2b46f.zip",
        "version": "0.0.3"
      },
      {
        "bundleName": "mach_waimai-marketing-home-user-task",
        "bundleVersion": "0.0.3",
        "mach_id": "waimai-marketing-home-user-task",
        "md5": "d9b05c5f53ad680d4bcec5982fa0aea7",
        "tags": "waimai-homepage;lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/b832bb000acc11eaaac739c0af34842b.zip",
        "version": "0.0.3"
      },
      {
        "bundleName": "mach_shangou-supermarket-search-paotui-common-style-1",
        "bundleVersion": "0.0.4",
        "mach_id": "supermarket-search-paotui-common",
        "md5": "99a65f29145473c1fbbea524a5b5fab1",
        "tags": "supermarket_homepage;waimai-search",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/b7cf8650885511ea82dc4db430c465f1.zip",
        "version": "0.0.4"
      },
      {
        "bundleName": "mach_waimai-order-order_confirm_quick_payment-style_1",
        "bundleVersion": "0.0.2",
        "mach_id": "waimai_order_order_confirm_quick_payment_style_1",
        "md5": "6c109f065684a882775645437bc62799",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/abf8cba0f5ca11ebbca417469b2c72b1.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-marketing-homepage-sale-style-AB",
        "bundleVersion": "0.0.4",
        "mach_id": "waimai-marketing-homepage-sale-style-AB",
        "md5": "9f3aa372021c534409dc027543c1f48e",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/db4f2bd0d21011ea8678d9774ac0b1c0.zip",
        "version": "0.0.4"
      },
      {
        "bundleName": "mach_waimai-order-order_confirm_extend_information-style_1",
        "bundleVersion": "0.0.6",
        "mach_id": "waimai_order_order_confirm_extend_information_style_1",
        "md5": "9e09103ad36570ea77ea301eca962692",
        "tags": "waimai-order;waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/e2aa82b016e511ecb0bcf5d744cd0db2.zip",
        "version": "0.0.6"
      },
      {
        "bundleName": "mach_waimai-usercenter-order-insurance-elderly-style-1",
        "bundleVersion": "0.0.1",
        "mach_id": "waimai-usercenter-order-insurance-elderly-style-1",
        "md5": "a2a8ac0b2e258e668557c9072c4d3615",
        "tags": "waimai-homepage;waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/7568be500bce11ec84dfd3d7f8627518.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-ad-platinum-scratch-card-template-left-A",
        "bundleType": "0",
        "bundleVersion": "0.0.9",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/16100/5088949/mach_waimai-ad-platinum-scratch-card-template-left-A.dio.zip",
        "mach_id": "mach_waimai-ad-platinum-scratch-card-template-left-A",
        "md5": "3fd9de85dce7ca6cbf61f2098803347e",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/70fcf8f0674711ee859a6b257ef5a080.zip",
        "version": "0.0.9"
      },
      {
        "bundleName": "mach_shangou-supermarket-discount-zone-style-1",
        "bundleVersion": "0.1.3",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/2507/459241/mach_shangou-supermarket-discount-zone-style-1__0.1.3.dio.zip",
        "mach_id": "supermarket-discount-zone",
        "md5": "8725f35747ce495bc00181fbc139c61d",
        "tags": "supermarket_homepage;waimai-search",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/d6ea71509efb11eaaabe7fda92debaee.zip",
        "version": "0.1.3"
      },
      {
        "bundleName": "mach_waimai-marketing-homepage-new-user-three-award",
        "bundleVersion": "0.0.1",
        "mach_id": "mach_waimai-marketing-homepage-new-user-three-award",
        "md5": "17cf0dc217c8992db7662e091957899e",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/fdd46240999611ea864199948a16deb9.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-order-order_confirm_self_delivery_elderly-style_1",
        "bundleVersion": "0.0.1",
        "mach_id": "waimai_order_order_confirm_self_delivery_elderly_style_1",
        "md5": "8a3fc37fdd50bfd98effd95d3133f136",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/fb551b300bce11ec868f219856186ab2.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-marketing-new-user-three-award-dialog",
        "bundleVersion": "0.0.1",
        "mach_id": "mach_waimai-marketing-new-user-three-award-dialog",
        "md5": "a8875bf04c70f6819eaaff23445f7b4e",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/a9b208b0999711eaaec12bc9be6bb5b4.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_shangou-supermarket-drug-portfolio-sale-style-1",
        "bundleVersion": "0.0.3",
        "mach_id": "supermarket-drug-portfolio-sale",
        "md5": "fb0b23a419935c09f0a61a8370b08de3",
        "tags": "supermarket_homepage;supermarket_poi;supermarket_goodsdetail",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/e9677940cb5611eaba620d0afd3c1548.zip",
        "version": "0.0.3"
      },
      {
        "bundleName": "mach_waimai-ad-restaurant-food-detail-vip-card",
        "bundleVersion": "0.0.1",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/1652/482520/mach_waimai-ad-restaurant-food-detail-vip-card__0.0.1.dio.zip",
        "mach_id": "restaurant-detail-vip-card",
        "md5": "1589ec970f5867f77fb80607bb98f12f",
        "tags": "waimai-restaurant",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/83080dd0a9fb11eaaef65534b5e4f9fc.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-dialog-orderdetail-activity-task",
        "bundleVersion": "0.0.2",
        "mach_id": "waimai-mach-dialog-orderdetail-activity-task",
        "md5": "6bc180d418145f9b9a626789732972f8",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/12b866202d3611eaac3e31d85dd5b2de.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-marketing-member-coupon-refuel-coupon-dialog",
        "bundleVersion": "0.0.4",
        "mach_id": "waimai-marketing-member-refuel-coupon-dialog",
        "md5": "fc0bf54f04d7c2124cf70af851b2be01",
        "tags": "waimai-restaurant",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/8f0e0f00d09111ea9cb58f40e0f02b28.zip",
        "version": "0.0.4"
      },
      {
        "bundleName": "mach_waimai-ad-search-search-theme-hl-card-join-no-dishes",
        "bundleType": "0",
        "bundleVersion": "0.0.2",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/869/2532138/mach_waimai-ad-search-search-theme-hl-card-join-no-dishes__0.0.2.dio.zip",
        "mach_id": "search-theme-hightlight-card-join-no-dishes",
        "md5": "cdc22f491796134446900f80336191c2",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/7e5b5eb0bcc111ec9a0499e13fcd02ae.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_pro_waimai_allowance_c_micro_full",
        "bundleType": "0",
        "bundleVersion": "0.0.29",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/14005/4760976/mach_pro_waimai_allowance_c_micro_full.dio.zip",
        "mach_id": "mach_pro_waimai_allowance_c_micro_full",
        "md5": "1ca86557d45b110bc237f599b698c0c0",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/5d3d3a9031a611eeb8b063b25d426dd6",
        "version": "0.0.29"
      },
      {
        "bundleName": "mach_waimai-order-order_status_insurance_info-style_1",
        "bundleVersion": "0.0.1",
        "mach_id": "waimai_order_status_insurance_info_style_1",
        "md5": "b59820b9dac2317153313f1b3a22a7f3",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/15ddbce0c91d11eb9d86eb9fb4661a0e.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-order-order_status_service_guarantee-style_1",
        "bundleVersion": "0.0.3",
        "mach_id": "waimai_order_order_status_service_guarantee_style_1",
        "md5": "949ab40a52b3fb89154c2670e23f9b94",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/11b2ddb0d75c11ebab4dc7d9fa903f53.zip",
        "version": "0.0.3"
      },
      {
        "bundleName": "mach_waimai-order-order_confirm_mt_delivery_elderly-style_1",
        "bundleVersion": "0.0.1",
        "mach_id": "waimai_order_order_confirm_mt_delivery_elderly_style_1",
        "md5": "b5afb6b3419d23d07bd289124cbcb59e",
        "tags": "waimai-order;waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/c2b5ddf00bce11ec9df1b3eb342eea2e.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-ad-search-search-theme-hightlight-card-join-dishes",
        "bundleVersion": "0.0.1",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/869/757991/mach_waimai-ad-search-search-theme-hightlight-card-join-dishes__0.0.1.dio.zip",
        "mach_id": "search-theme-hightlight-card-join-dishes",
        "md5": "55d0636d2675d3e3cc58ab83134236fb",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/1a98ec0028a011eb8ed1797acde00371.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-order-order_confirm_food_info-style_1",
        "bundleVersion": "0.0.9",
        "mach_id": "waimai_order_order_confirm_food_info_style_1",
        "md5": "f4fd237b04e0265aba7c61e7aebe7f2d",
        "tags": "waimai-homepage;waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/8588c6c016e811ecab2e3ba6c64ea859.zip",
        "version": "0.0.9"
      },
      {
        "bundleName": "mach_waimai-order-order_confirm_deliverytime-style_1",
        "bundleVersion": "0.0.1",
        "mach_id": "waimai_order_order_confirm_deliverytime_style_1",
        "md5": "7b80f422b85fd53b14bb25a295e9c827",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/27ca19d0f50511eb8b576170a698f9c9.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-marketing-submit-order-membership-style-4",
        "bundleVersion": "0.0.3",
        "mach_id": "wm-submit-order-membership-style-4",
        "md5": "214169c622a23a7ccbab72562953dd57",
        "tags": "waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/e5558050c01a11ea8874bd1c7118bd59.zip",
        "version": "0.0.3"
      },
      {
        "bundleName": "mach_waimai-ad-cpc-across-store-buy-new",
        "bundleVersion": "0.0.6",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/869/1586017/mach_waimai-ad-cpc-across-store-buy-new__0.0.6.dio.zip",
        "mach_id": "mach_waimai-ad-cpc-across-store-buy-new",
        "md5": "accdc096f8c227a2a3034bcb04e20ecf",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/33b4b660096911ecb92d0fccdfff7ed3.zip",
        "version": "0.0.6"
      },
      {
        "bundleName": "mach_waimai-order-order_status_edit_info-style_1",
        "bundleVersion": "0.0.5",
        "mach_id": "waimai_order_order_status_edit_info_style_1",
        "md5": "abf5da16c6a43cac699e0201332dead4",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/e21ed050041411ec928c012e504f0754.zip",
        "version": "0.0.5"
      },
      {
        "bundleName": "mach_waimai-order-confirm_additional_bargain_elderly-style_1",
        "bundleVersion": "0.0.1",
        "mach_id": "waimai_order_order_confirm_additional_bargain_elderly_style_1",
        "md5": "27ac6c499ba824a477bde6faceabbaed",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/e3fe6a800bcf11ec990217f2b3bfe90b.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-usercenter-homepage-future_spu",
        "bundleVersion": "0.0.14",
        "mach_id": "waimai_mach_usercenter_homepage_future_spu",
        "md5": "00ece0f056890677086d74c8276c5216",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/4bfe80f00f0b11ec9560556239faac70.zip",
        "version": "0.0.14"
      },
      {
        "bundleName": "mach_shangou-supermarket-drug-im-entrance-style-1",
        "bundleVersion": "0.0.6",
        "mach_id": "supermarket-drug-im-entrance",
        "md5": "c99cedce4fccbb06c4079b25d49f7a24",
        "tags": "supermarket_homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/11077d30b8e011ea8e150fc41b85eac7.zip",
        "version": "0.0.6"
      },
      {
        "bundleName": "mach_waimai-marketing-homepage-discount-style-grid",
        "bundleVersion": "0.0.24",
        "mach_id": "waimai-mach-marketing-homepage-discount-style-grid",
        "md5": "34240cb3624481cbb169d4ee02972b6b",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/0ec703f00a9511eabce1c146b3099fac.zip",
        "version": "0.0.24"
      },
      {
        "bundleName": "mach_waimai-marketing-dynamicPopup-homepageActivityNew",
        "bundleVersion": "0.0.1",
        "mach_id": "wm-home-dynamicpopup-new",
        "md5": "a7143c5124a10aee13dcef737c39c550",
        "tags": "waimai-homepage;lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/785af530d6d011eaaa46a705092df87c.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-marketing-dynamicPopup-homepageActivity",
        "bundleVersion": "0.0.1",
        "mach_id": "wm-home-dynamicpopup",
        "md5": "50a38693cfb661ba2cab9f81178b3d20",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/ee1124c067f911eabd314ba00dfed60e.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_shangou-supermarket-fallen-coupon-style-1",
        "bundleVersion": "0.0.7",
        "mach_id": "supermarket-fallen-coupon",
        "md5": "b6412e46d3209d8aefc6d0824ebfdb1a",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/5f9e7540abd711eab538319ef42d3438.zip",
        "version": "0.0.7"
      },
      {
        "bundleName": "mach_waimai-order-order_confirm_mt_delivery-style_1",
        "bundleVersion": "0.0.5",
        "mach_id": "waimai_order_order_confirm_mt_delivery_style_1",
        "md5": "2a6180546abf0067ade283f34185e4af",
        "tags": "waimai-homepage;waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/65f98540fa9311ebb2f683413a1cfb02.zip",
        "version": "0.0.5"
      },
      {
        "bundleName": "mach_waimai-order-order_confirm_self_delivery-style_1",
        "bundleVersion": "0.0.2",
        "mach_id": "waimai_order_order_confirm_self_delivery_style_1",
        "md5": "829367b6573f07ffb42c0c595460e00d",
        "tags": "waimai-homepage;waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/e9ff5af0f5c911eb8c92a3aa50c87189.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-marketing-welfare-style",
        "bundleVersion": "0.0.2",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/1652/297445/mach_waimai-marketing-welfare-style__0.0.2.dio.zip",
        "mach_id": "waimai-marketing-welfare-style",
        "md5": "351c267fcd492c3e0ccde0a7fe115593",
        "tags": "waimai-restaurant",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/c35ee830375b11ea87ea1b429688099f.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-order-status_operatearea_buttonlist-style_1",
        "bundleVersion": "0.0.6",
        "mach_id": "waimai_order_status_operatearea_buttonlist_style_1",
        "md5": "7b95b4c16514b027e0558362dd6dd4eb",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/7b742ff0063811ec98b11b8ce660c9f5.zip",
        "version": "0.0.6"
      },
      {
        "bundleName": "mach_waimai-dialog-orderdetail-share-redpacket",
        "bundleVersion": "0.0.6",
        "mach_id": "waimai-mach-dialog-orderdetail-share-redpacket",
        "md5": "cad93dea45dde51e86680c3eb69cf0a6",
        "tags": "waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/8ff26200d61711eab39ff308ee33ff39.zip",
        "version": "0.0.6"
      },
      {
        "bundleName": "mach_shangou-supermarket-drug-red-packet-dialog-style-1",
        "bundleVersion": "0.0.3",
        "mach_id": "supermarket-drug-red-packet-dialog",
        "md5": "63f25b4f7ee0a1474838e2d923fbf6be",
        "tags": "supermarket_homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/3bd23a10c01911eabbf41f4935f6d437.zip",
        "version": "0.0.3"
      },
      {
        "bundleName": "mach_supermarket-mk-new-user-region-ABC",
        "bundleVersion": "0.0.4",
        "mach_id": "supermarket-mk-new-user-region-ABC",
        "md5": "42006d8e5afe57b9683419ae7db5166c",
        "tags": "supermarket_homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/acb0d8e0c5cd11eaa79fb921fa93cee4.zip",
        "version": "0.0.4"
      },
      {
        "bundleName": "mach_waimai-usercenter-order-after-recommend",
        "bundleVersion": "0.0.6",
        "mach_id": "waimai-usercenter-order-after-recommend-style-0",
        "md5": "576e8868fb7e6c0a7469d52e470d3299",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/abb0aa007e1b11ea8dc0cd63fef0f8af.zip",
        "version": "0.0.6"
      },
      {
        "bundleName": "mach_waimai-marketing-order-page-new-user-three-award",
        "bundleVersion": "0.0.1",
        "mach_id": "mach_waimai-marketing-order-page-new-user-three-award",
        "md5": "bd7f083971580093e81f376545013b42",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/def8cc20999711eaaff55f0a80bd6b0b.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_shangou-supermarket-drug-im-entrance-with-title-style-1",
        "bundleVersion": "0.0.2",
        "mach_id": "supermarket-drug-im-entrance-with-title",
        "md5": "b1309bf80307b6f5ef6b9ea2d2195025",
        "tags": "supermarket_homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/eb36eb10d72811ea94cd574a66f99685.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-order-order_status_cabinet_take_food-style_1",
        "bundleVersion": "0.0.1",
        "mach_id": "waimai_order_status_cabinet_take_food_style_1",
        "md5": "9d1a552c0fd528579483d274fa00662c",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/8d876810c92011eba0e3d918abb2b799.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-restaurant-future-header",
        "bundleVersion": "0.0.1",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/1652/1615501/mach_waimai-restaurant-future-header__0.0.1.dio.zip",
        "mach_id": "waimai_restaurant_future_header",
        "md5": "14242814ebf02281ce1f1cad7de84e82",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/ccb63be00f0911ecb239ab14fe83db93.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-search-v731-paotui-common-style-17",
        "bundleVersion": "0.0.1",
        "mach_id": "mach_waimai-search-v731-paotui-common-style-17",
        "md5": "528caee97bd99fc4bd6e2e1b3245134a",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/c31ca3e05c4e11eabdddedfaace0a6b0.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-ad-platinum-cpm-recommend-dishes-dynamic-word",
        "bundleType": "0",
        "bundleVersion": "0.0.20",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/869/3306401/mach_waimai-ad-platinum-cpm-recommend-dishes-dynamic-word__0.0.20.dio.zip",
        "mach_id": "pt-dcopt-temp-82",
        "md5": "c175d792d7b3163c7a3fc1848797d919",
        "tags": "waimai-homepage;waimai-kingkong;",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/187a18b038be11ed9293e7378f113a40.zip",
        "version": "0.0.20"
      },
      {
        "bundleName": "mach_supermarket-channel-drug-feed-spu-A",
        "bundleVersion": "0.0.1",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/2507/572208/mach_supermarket-channel-drug-feed-spu-A__0.0.1.dio.zip",
        "mach_id": "supermarket-channel-drug-feed-spu-A",
        "md5": "78f15b6089aa5a2d781ecad9d0c5cbdb",
        "tags": "supermarket_homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/1f07dba0d65e11eab8866d4d8e3ea5e7.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-ad-union-micro-template-platinum-entry",
        "bundleType": "0",
        "bundleVersion": "0.0.2",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/869/4410273/mach_waimai-ad-union-micro-template-platinum-entry.dio.zip",
        "mach_id": "mach_waimai-ad-union-micro-template-platinum-entry",
        "md5": "0d542f6a1a39d5a8890645c6c1e87885",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/abf86b00faf111eda6fc0960b283bdd7.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-ad-search-search-theme-carousel-no-dishes",
        "bundleVersion": "0.0.2",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/869/551796/mach_waimai-ad-search-search-theme-carousel-no-dishes__0.0.2.dio.zip",
        "mach_id": "search-theme-carousel-no-dishes",
        "md5": "490e6d4064da0fb42ddcc820930964fa",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/fa463340ccab11ea82a61796b6e78c44.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-marketing-homepage-newuser-promotion",
        "bundleVersion": "0.0.8",
        "mach_id": "waimai-marketing-homepage-newuser-promotion",
        "md5": "f57840c969d9843c607ed53f9aa132d3",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/4e7b7780165f11ea8833bf1e5f5fd413.zip",
        "version": "0.0.8"
      },
      {
        "bundleName": "mach_waimai-ad-platinum-original-template-jt-entry-activity-v2",
        "bundleType": "0",
        "bundleVersion": "0.0.2",
        "dioUrl": "",
        "mach_id": "mach_waimai-ad-platinum-original-template-jt-entry-activity-v2",
        "md5": "a558498486c61466c6e1130199d38d33",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/3fc745d0fb6b11edab3e5d60f6c466bc.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-usercenter-order-insurance-style-1",
        "bundleVersion": "0.0.6",
        "mach_id": "waimai-usercenter-order-insurance-style-1",
        "md5": "2dfc980a39ff6a070041540b148877f2",
        "tags": "waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/aa289f802d3f11ea85a7e5cacbafc3a4.zip",
        "version": "0.0.6"
      },
      {
        "bundleName": "mach_waimai-order-confirm_extend_information_elderly-style_1",
        "bundleVersion": "0.0.3",
        "mach_id": "waimai_order_order_confirm_extend_information_elderly_style_1",
        "md5": "cecc116326a1b803964f5fce87b5c0d9",
        "tags": "waimai-homepage;waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/304fad6016e611eca3730917b6b894e3.zip",
        "version": "0.0.3"
      },
      {
        "bundleName": "mach_waimai-marketing-home-page-touch-matrix-redpacket",
        "bundleVersion": "0.0.1",
        "mach_id": "mach_waimai-marketing-home-page-touch-matrix-redpacket",
        "md5": "cb5b708a7735ffb6b68bf724ca24f70e",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/5ff00490dc9311eaba84b17651022826.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_pro_waimai_allowance_c_new_poi",
        "bundleType": "0",
        "bundleVersion": "0.0.6",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/14005/6137299/mach_pro_waimai_allowance_c_new_poi.dio.zip",
        "mach_id": "mach_pro_waimai_allowance_c_new_poi",
        "md5": "2529e4c0bdaa874841e269e537bbc40f",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/c70a86c0223d11efa5c499035fcaca86",
        "version": "0.0.6"
      },
      {
        "bundleName": "mach_waimai-ad-restaurant-vip-card",
        "bundleVersion": "0.0.13",
        "mach_id": "restaurant-vip-card",
        "md5": "ae801a493f0502cfa09e1877cd96c4fa",
        "tags": "waimai-restaurant",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/f7807240c02311ea8b155d9be2e278b1.zip",
        "version": "0.0.13"
      },
      {
        "bundleName": "mach_waimai-marketing-optimization-channel-v1",
        "bundleVersion": "0.0.4",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/1652/358036/mach_waimai-marketing-optimization-channel-v1__0.0.4.dio.zip",
        "mach_id": "wm-home-head-optimization-channel-v1",
        "md5": "e5ea2f97afb502532a00a02f1ecb4f13",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/f77ab9f0642e11ea8b273fc73dfb3541.zip",
        "version": "0.0.4"
      },
      {
        "bundleName": "mach_waimai-ad-platinum-city-template",
        "bundleType": "0",
        "bundleVersion": "0.0.39",
        "mach_id": "mach_waimai-ad-platinum-city-template",
        "md5": "00a1eec0a8cbafa745e4eafadf2cb68d",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/29bb5d0038be11ed966f1b2796dcbedd.zip",
        "version": "0.0.39"
      },
      {
        "bundleName": "mach_waimai-marketing-optimization-channel-v2",
        "bundleVersion": "0.0.5",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/1652/332373/mach_waimai-marketing-optimization-channel-v2__0.0.5.dio.zip",
        "mach_id": "wm-home-head-optimization-channel-v2",
        "md5": "625ccc70b6d601d4c71025ce84f2723d",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/eac98150578611eabddbf787f6b9a93a.zip",
        "version": "0.0.5"
      },
      {
        "bundleName": "mach_shangou-supermarket-main-instruction-main-instruction",
        "bundleVersion": "0.0.3",
        "mach_id": "supermarket-drug-main-instruction",
        "md5": "d014aff25b563676818b24da1f8cfbb0",
        "tags": "supermarket_goodsdetail;supermarket_homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/1e08bb00d30411eaaf72c571b9289035.zip",
        "version": "0.0.3"
      },
      {
        "bundleName": "mach_waimai-order-status_operatearea_desc-style_1",
        "bundleVersion": "0.0.1",
        "mach_id": "waimai_order_status_operatearea_desc_style_1",
        "md5": "504a503f85827e3c01319972433c12ff",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/6bf52b80c92311eb9c1ee521abbe76d9.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-ad-tj-full-popup-warm-up-period",
        "bundleType": "0",
        "bundleVersion": "0.0.7",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/869/2529955/mach_waimai-ad-tj-full-popup-warm-up-period__0.0.7.dio.zip",
        "mach_id": "mach_waimai-ad-tj-full-popup-warm-up-period",
        "md5": "4a0efd2d5ebfaa8fe76538034c755aea",
        "tags": "lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/6c814120bc9211ecad166758b5295adf.zip",
        "version": "0.0.7"
      },
      {
        "bundleName": "mach_pro_waimai_allowance_c_immersive",
        "bundleType": "0",
        "bundleVersion": "0.0.2",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/14005/4835918/mach_pro_waimai_allowance_c_immersive.dio.zip",
        "mach_id": "mach_pro_waimai_allowance_c_immersive",
        "md5": "574f9abbdeeea4fc4626f4afeb07cbb7",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/19ca90303cca11ee965d911dadda738a",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-order-order_confirm_close_info-style_1",
        "bundleVersion": "0.0.2",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/8100/1494884/mach_waimai-order-order_confirm_close_info-style_1__0.0.2.dio.zip",
        "mach_id": "waimai_order_order_confirm_close_info_style_1",
        "md5": "5dccf35fbe736a80ef44c673731cfe02",
        "tags": "waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/84e9a410f5cc11ebab2c9df95a56dfc8.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-marketing-sumbit-order-poi-coupon-guide-style-1",
        "bundleVersion": "0.0.1",
        "mach_id": "wm-submit-order-poi-coupon-guide-style-1",
        "md5": "21bd2b28b81b69d5f4c7ffaaf85210fb",
        "tags": "",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/34bf97d099a011eaaea8b7c1ac5653a4.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-push-push-push-style-1",
        "bundleVersion": "0.0.2",
        "mach_id": "waimai-mach-marketing-push-style-1",
        "md5": "e957f39e214560e6d8b812aa2d5e0e91",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/8577139074a911ea9732f79f07150960.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-marketing-member-coupon-pre-exchange-coupon-dialog",
        "bundleVersion": "0.0.6",
        "mach_id": "waimai-marketing-mermber-pre-exchange-coupon-dialog",
        "md5": "440191f5e4fdf169204be3093aaad4dd",
        "tags": "waimai-restaurant",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/081f8ef0d09211ea9e7619c4ed8e68e2.zip",
        "version": "0.0.6"
      },
      {
        "bundleName": "mach_waimai-order-order_status_refund_info-style_1",
        "bundleVersion": "0.0.2",
        "mach_id": "waimai_order_status_refund_info_style_1",
        "md5": "7459ad93d3b7bdefc7e3dfb71ae50f3a",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/7664ff70d81711ebb1ee0701b25c09fe.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-order-order_status_abnormal_remind-style_1",
        "bundleVersion": "0.0.4",
        "mach_id": "waimai_order_order_status_abnormal_remind_style_1",
        "md5": "7604a943011d2990bbad553e30d1e074",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/bffd90d0d5cd11ebb83edd023ac7af77.zip",
        "version": "0.0.4"
      },
      {
        "bundleName": "mach_supermarket-mk-super-message-A",
        "bundleVersion": "0.0.2",
        "mach_id": "supermarket-mk-super-message-A",
        "md5": "6af40fd7f29964db176fe426fc32577a",
        "tags": "supermarket_homepage;supermarket_poi;supermarket_goodsdetail",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/fcff9700db8a11ea8ad881f4e78e5bfe.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-ad-platinum-video-base",
        "bundleType": "0",
        "bundleVersion": "0.0.14",
        "mach_id": "pt-dcopt-temp-65",
        "md5": "d55cd991f58de159bcadefb210df2844",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/12fc170008bf11ed909b6117d67f7361.zip",
        "version": "0.0.14"
      },
      {
        "bundleName": "mach_waimai-marketing-home-user-wishcard",
        "bundleVersion": "0.0.2",
        "mach_id": "waimai-marketing-homepage-wishcard",
        "md5": "1ed77e7edf304dd0dd793937ca1d50cc",
        "tags": "waimai-homepage;lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/5af6650067ff11eabe64754fbee029be.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-marketing-homepage-user-award-tip-dialog",
        "bundleVersion": "0.0.2",
        "mach_id": "mach_waimai-marketing-homepage-user-award-tip-dialog",
        "md5": "4b146268dd02d2c38228284f212f8965",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/bca33ba0aa1911eaa5124d22f4d79921.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_shangou-supermarket-search-business-direct-style-1",
        "bundleVersion": "0.0.3",
        "mach_id": "supermarket-search-business-direct",
        "md5": "64c8ec817c6ed4c0bc040a543e140c20",
        "tags": "supermarket_homepage;waimai-search",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/43cc2a00885611eab6cff920edc7c10e.zip",
        "version": "0.0.3"
      },
      {
        "bundleName": "mach_waimai-order-order_status_im_info-style_1",
        "bundleVersion": "0.0.3",
        "mach_id": "waimai_order_order_status_im_info_style_1",
        "md5": "aafaff1c6e65ec69a1d82a194be4124f",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/e0383d70d75b11eb9c159da272f2e92c.zip",
        "version": "0.0.3"
      },
      {
        "bundleName": "mach_waimai-ad-platinum-cpt-customization-swiper-big",
        "bundleType": "0",
        "bundleVersion": "0.0.7",
        "mach_id": "mach_waimai-ad-platinum-cpt-customization-swiper-big",
        "md5": "1273ee75fc280af6fa25d85d64bec569",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/379c8540a08211ec9cb697c88239fab1.zip",
        "version": "0.0.7"
      },
      {
        "bundleName": "mach_waimai-order-order_confirm_overseas-style_1",
        "bundleVersion": "0.0.1",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/8100/1487396/mach_waimai-order-order_confirm_overseas-style_1__0.0.1.dio.zip",
        "mach_id": "waimai_order_order_confirm_overseas_style_1",
        "md5": "f56ba8e790f7076c534a1a6d86bdf516",
        "tags": "waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/803d6380f4ef11eba5e49ff191de692f.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_supermarket-shopping-spell-luck-red-packet-new-dialog",
        "bundleType": "0",
        "bundleVersion": "0.0.2",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/2507/5796175/supermarket-shopping-spell-luck-red-packet-dialog-new.dio.zip",
        "mach_id": "supermarket-shopping-spell-luck-red-packet-dialog-new",
        "md5": "00cd090d44b9db341bda01d6dc1399f0",
        "tags": "supermarket_homepage;waimai-order-status;waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/f51c0600e52111eeb7f4fb0d8950d1f2.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_supermarket-mk-block-B",
        "bundleVersion": "0.0.2",
        "mach_id": "supermarket-mk-block-B",
        "md5": "1b361a0c83e7086befadf209a8db7181",
        "tags": "supermarket_homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/ce13b900dd2c11eab3056fd7215c7c6d.zip",
        "version": "0.0.2"
      },
      {
        "bundleName": "mach_waimai-order-order_status_base_info-style_1",
        "bundleVersion": "0.0.3",
        "mach_id": "waimai_order_order_status_base_info_style_1",
        "md5": "6b5f0e84c45b73fd37fac1e640428c31",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/21f430b00edf11eca97f9b6c91854826.zip",
        "version": "0.0.3"
      },
      {
        "bundleName": "mach_waimai-order-order_confirm_additional_bargain-style_1",
        "bundleVersion": "0.0.3",
        "mach_id": "waimai_order_order_confirm_additional_bargain_style_1",
        "md5": "dbd6447ae5b6e70d2e3034fb2989d7d7",
        "tags": "waimai-homepage;waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/1fd445e037bb11eca022912b58fc7d24.zip",
        "version": "0.0.3"
      },
      {
        "bundleName": "mach_waimai-ad-platinum-diamond-position-react",
        "bundleVersion": "0.0.16",
        "dioUrl": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/869/219071/mach_waimai-ad-platinum-diamond-position-react__0.0.16.dio.zip",
        "mach_id": "mach_waimai-ad-platinum-diamond-position-react",
        "md5": "2e564b29f0716bd5347a4974fd1b6e14",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/c20a2390054811ea92274d51e095b2e0.zip",
        "version": "0.0.16"
      },
      {
        "bundleName": "mach_waimai-usercenter-productfeed-style-5",
        "bundleVersion": "0.0.20",
        "mach_id": "wm-product-feed-style-5",
        "md5": "06da0cbaa0c96008845c5ace299d10da",
        "tags": "waimai-homepage",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/4c402f70d09911ea99d3d39ebdb5465e.zip",
        "version": "0.0.20"
      },
      {
        "bundleName": "mach_shangou-supermarket-patient-info-style-1",
        "bundleVersion": "0.0.10",
        "mach_id": "supermarket-patient-info",
        "md5": "95ad362b39275e603f3cdc7b29fb5a69",
        "tags": "waimai-homepage;waimai-order;supermarket_poi",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/8f081080c59911ea8497c79519052aa0.zip",
        "version": "0.0.10"
      },
      {
        "bundleName": "mach_waimai-marketing-home-timelimited-redenvelope",
        "bundleVersion": "0.0.1",
        "mach_id": "wm-marketing-home-timelimited-redenvelope",
        "md5": "fcde525da64aa8efa3629e588485402f",
        "tags": "waimai-homepage;lazy-download",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/a183f4c0aa1b11ea9791afc95c9a85fb.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-marketing-heaven-coupon-style-default",
        "bundleVersion": "0.0.1",
        "mach_id": "waimai-marketing-heaven-coupon-style-default",
        "md5": "eaf0541445871e6bfd86ec6efb653cc6",
        "tags": "",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/df93a370d61a11ea8539ff96480d1f7b.zip",
        "version": "0.0.1"
      },
      {
        "bundleName": "mach_waimai-order-confirm_service_guarantee_elderly-style_1",
        "bundleVersion": "0.0.1",
        "mach_id": "waimai_order_order_confirm_service_guarantee_elderly_style_1",
        "md5": "7fe1f6135119fa1df1abed86366cf48a",
        "tags": "waimai-homepage;waimai-order",
        "url": "https://w.meituan.net/v1/mss_28af88a282204bf6a754a48cbfabcb15/waimai-mach/38fd68700bcf11ec85fb831b667a456a.zip",
        "version": "0.0.1"
      }
    ]
  },
  "code": 0
}
```
