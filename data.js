const schoolActions = [
  { label: "SCHOOL PROFILE", key: "schoolProfile" },
  { label: "PERFORMANCE DASHBOARD & TARGETS-ENROLLMENT", key: "performanceDashboard" },
  { label: "CHARACTERIZATION ON ENROLLMENT", key: "characterizationEnrollment" },
  { label: "NAT RESULT", key: "natResult" },
  { label: "CHARACTERIZATION ON NAT RESULT", key: "characterizationNat" },
  { label: "ISSUES AND CONCERN", key: "issuesAndConcern" },
  { label: "CATCH-UP PLAN", key: "catchUpPlan" },
];

const districtActions = [
  { label: "SCHOOL LOCATION", key: "schoolProfile" },
  { label: "PERFORMANCE DASHBOARD & TARGETS-ENROLLMENT", key: "performanceDashboard" },
  { label: "CHARACTERIZATION ON ENROLLMENT", key: "characterizationEnrollment" },
  { label: "NAT RESULT", key: "natResult" },
  { label: "CHARACTERIZATION ON NAT RESULT", key: "characterizationNat" },
  { label: "ISSUES AND CONCERN", key: "issuesAndConcern" },
  { label: "CATCH-UP PLAN", key: "catchUpPlan" },
];

const districts = [
  {
    id: 6,
    name: "District 6",
    schoolIds: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    documents: {
      schoolProfile: "https://drive.google.com/file/d/1LOwVbYl3aCcnVn2lDgcKZ1Vw1J7RKJVP/view?usp=drive_link",
      performanceDashboard: "https://drive.google.com/file/d/1ieGRGGisViVzzIW4TEXwbYNQShMtgZSQ/view?usp=drive_link",
      characterizationEnrollment: "https://drive.google.com/file/d/1VjYra_OAjAYWNDRTf60Y8-H6ofJaeDXk/view?usp=drive_link",
      natResult: "https://drive.google.com/file/d/1NpBfhr3Ft8CWOoudNCwpXID8KDpdM0Od/view?usp=drive_link",
      characterizationNat: "https://drive.google.com/file/d/1tVt_C7dM5X8yBfHZP0-brCjy_Lg5jc90/view?usp=drive_link",
      issuesAndConcern: "https://drive.google.com/file/d/1CpDMIoK6prhVL_VXLE0tpqRROuoDOaEt/view?usp=drive_link",
      catchUpPlan: "https://drive.google.com/file/d/1otJP3FdJsvUPee8YSEvosiY7TIVCTW7C/view?usp=drive_link",
    },
  },
];

const schools = [
  {
    id: 1,
    name: "Apil Integrated School",
    coords: [8.43954, 123.77148],
    type: "integrated",
    heads: [
      { name: "Raymond S. Atay", role: "School Head", image: "images/heads/Raymond Atay.png" },
    ],
    documents: {
      schoolProfile: "https://drive.google.com/file/d/1FMUOKXpHwJUN0fSX7iNdfDswcfT0sBj9/view?usp=drive_link",
      performanceDashboard: "https://drive.google.com/file/d/1Zv5i5JYI5ltrUiSHENoHWXMx52cTH7Xi/view?usp=drive_link",
      characterizationEnrollment: "https://drive.google.com/file/d/1YVoCD1fbEx_5pHFRJwEwGYbLntEyIsQW/view?usp=drive_link",
      natResult: "https://drive.google.com/file/d/1IUc0n5qtK8riGpnX9dBPcRLNq6bIxd5z/view?usp=drive_link",
      characterizationNat: "https://drive.google.com/file/d/1lwODtbGYv1BW_L2JtVU-bu23hGJPq_00/view?usp=drive_link",
      issuesAndConcern: "https://drive.google.com/file/d/1i_FuhBRplCVch3bV9OzYKZvj1211j6hm/view?usp=drive_link",
      catchUpPlan: "https://drive.google.com/file/d/1LnGt_5YnCl8SghmT4Ne4rhwNlZHNegMH/view?usp=drive_link",
    },
  },
  {
    id: 2,
    name: "San Vicente Alto Elementary School",
    coords: [8.46006, 123.79929],
    type: "elementary",
    heads: [
      { name: "Alberta M. Quilab", role: "School Head", image: "images/heads/Alberta M. Quilab.png" },
    ],
    documents: {
      schoolProfile: "https://drive.google.com/file/d/1704lv72dQP9RmsDqPmWKcV4P-n7p5YRI/view?usp=drive_link",
      performanceDashboard: "https://drive.google.com/file/d/15Qm1-LSAblc1L1qybtTy_Stbd7c6939i/view?usp=drive_link",
      characterizationEnrollment: "https://drive.google.com/file/d/1zr-NhunJ_NTAEvvmijJ6rzx7U_MKCqWt/view?usp=drive_link",
      natResult: "https://drive.google.com/file/d/1nlEqDFKMRP60qeDVbWkRHeMge_9x2ZO2/view?usp=drive_link",
      characterizationNat: "https://drive.google.com/file/d/1bdOc8eBnTcJtrzSTqGUefvon12StD9x9/view?usp=drive_link",
      issuesAndConcern: "https://drive.google.com/file/d/1VpDf1QEifK0x-ibtbO9DAYna2rs7SGxT/view?usp=drive_link",
      catchUpPlan: "https://drive.google.com/file/d/1CMVbB7uHB4mdj-ViZeNuq-e9Cxa0cISN/view?usp=drive_link",
    },
  },
  {
    id: 3,
    name: "Buenavista Elementary School",
    coords: [8.44622, 123.78955],
    type: "elementary",
    heads: [
      { name: "Joel C. Acalain", role: "School Head", image: "images/heads/Joel C. Acalain.png" },
    ],
    documents: {
      schoolProfile: "https://drive.google.com/file/d/1IhJzibxwAwDD8l285uF3MuLf7m9JTePC/view?usp=drive_link",
      performanceDashboard: "https://drive.google.com/file/d/1v6o9TgljIu2Kyf9D8ufWRNLxC6TYFkJW/view?usp=drive_link",
      characterizationEnrollment: "https://drive.google.com/file/d/1ec6ZTuFNk4JbJCFRmX4BvhhldHR5mUfa/view?usp=drive_link",
      natResult: "https://drive.google.com/file/d/1HQZU2rniWEK5ftc-VEixOtZR_5EiRMlE/view?usp=drive_link",
      characterizationNat: "https://drive.google.com/file/d/1_3o3KJgw2kshlSTH571gPcRTSwBOozWd/view?usp=drive_link",
      issuesAndConcern: "https://drive.google.com/file/d/15wM3Qq7MQIv4BwFlXIcQ9xjuDSU4mhjJ/view?usp=drive_link",
      catchUpPlan: "https://drive.google.com/file/d/1ARcB8yeB-egj3bt15ex_EPqu2UsXpGwh/view?usp=drive_link",
    },
  },
  {
    id: 4,
    name: "Cosme Cagas Memorial Elementary School",
    coords: [8.42838, 123.74666],
    type: "elementary",
    heads: [
      { name: "Sherwin L. Cabanlet", role: "School Head", image: "images/heads/Sherwin L. Cabanlet.png" },
    ],
    documents: {
      schoolProfile: "https://drive.google.com/file/d/1w3EjeAuVmkH219ImWOx-ZXa-OHkAGPwt/view?usp=drive_link",
      performanceDashboard: "https://drive.google.com/file/d/1vWW9KhjoG3KStGWF9uH6eC8TNnmiJs-Y/view?usp=drive_link",
      characterizationEnrollment: "https://drive.google.com/file/d/1PzpeCb5zg83Xbcmuwsc6WkdBHNXIMRDk/view?usp=drive_link",
      natResult: "https://drive.google.com/file/d/14TN4PhVwvkvqeefyNbdrBmp2vO3Jh3A7/view?usp=drive_link",
      characterizationNat: "https://drive.google.com/file/d/1K6AmTuT8YfKiyeYwjlfRqLbngChW3nwq/view?usp=drive_link",
      issuesAndConcern: "https://drive.google.com/file/d/1FtsFSCl1bSPg9XsluN4TpDNXXYFQNLyX/view?usp=drive_link",
      catchUpPlan: "https://drive.google.com/file/d/1BQiWShAbPj-d8VTsSWH2h25-7jZnfquL/view?usp=drive_link",
    },
  },
  {
    id: 5,
    name: "Dolipos Alto Elementary School",
    coords: [8.44028, 123.7523],
    type: "elementary",
    heads: [
      { name: "Darren Jake B. Gomez", role: "School Head", image: "images/heads/Darren Jake B. Gomez .png" },
    ],
    documents: {
      schoolProfile: "https://drive.google.com/file/d/1AfPCGxjF5289gDYpienThU4XN3UgMwSu/view?usp=drive_link",
      performanceDashboard: "https://drive.google.com/file/d/1W0U0RVCxYUsSSTL8YPnzjjecBeqk3nCA/view?usp=drive_link",
      characterizationEnrollment: "https://drive.google.com/file/d/1osuT6HPof-CkWCxQgSdkqmwNkB8LKyZS/view?usp=drive_link",
      natResult: "https://drive.google.com/file/d/1UdthduTB-IZe0lEtpgVpyh2HK6ZERAMB/view?usp=drive_link",
      characterizationNat: "https://drive.google.com/file/d/1QFyK_ozb9_bLcmtUi8dTzpif_Ft2r8VI/view?usp=drive_link",
      issuesAndConcern: "https://drive.google.com/file/d/1IbT4BqIkfU3NqWTiqkgnX39mffhwdd5k/view?usp=drive_link",
      catchUpPlan: "https://drive.google.com/file/d/1AbxAknf51yYTuM3MDmsNeiUgM_xGICEd/view?usp=drive_link",
    },
  },
  {
    id: 6,
    name: "Dullan Integrated School",
    coords: [8.42218, 123.73247],
    type: "integrated",
    heads: [
      { name: "Felly S. Galay", role: "School Head", image: "images/heads/Felly S. Galay.png" },
    ],
    documents: {
      schoolProfile: "https://drive.google.com/file/d/11W38HKt-6E7hoF9FW4kpao2vNh0ebqja/view?usp=drive_link",
      performanceDashboard: "https://drive.google.com/file/d/1NRn4h73NX-Vj9tPq6FBC9-Iuz7A3hrPl/view?usp=drive_link",
      characterizationEnrollment: "https://drive.google.com/file/d/1RYBnkRiVT-KDKLmTJXaFElCG3JQVSg-1/view?usp=drive_link",
      natResult: "https://drive.google.com/file/d/1vPhlUtNUdC87imcYM3sBV7YAxI_NzpyB/view?usp=drive_link",
      characterizationNat: "https://drive.google.com/file/d/12m0Wk-EGhcyCIpOAjFJ2iPM9Nd--6MZ4/view?usp=drive_link",
      issuesAndConcern: "https://drive.google.com/file/d/1BqYjZHjrGbq_stpxalVHIdrWBYkRRC7Q/view?usp=drive_link",
      catchUpPlan: "https://drive.google.com/file/d/1s-BCUZXTxIIlesqR-bIl2mSRGgQCjNbx/view?usp=drive_link",
    },
  },
  {
    id: 7,
    name: "Kanowanan Tribal Elementary School",
    coords: [8.3873, 123.69432],
    type: "elementary",
    heads: [
      { name: "Bailey M. Bocar", role: "School Head", image: "images/heads/Bailey M. Bocar.png" },
    ],
    documents: {
      schoolProfile: "https://drive.google.com/file/d/1RMXchPuquJKIcObZA_FebfLHm6qGxbsr/view?usp=drive_link",
      performanceDashboard: "https://drive.google.com/file/d/1azPc8guD-GiVYdpyHgiaVDaOiR2frn1g/view?usp=drive_link",
      characterizationEnrollment: "https://drive.google.com/file/d/1U7ESTJ23xoLjJ3D2ja8zeRvxXKTPO3Yy/view?usp=drive_link",
      natResult: "https://drive.google.com/file/d/1dALGEq9EOjIr_TcJBDVX98ohhUw-7Phe/view?usp=drive_link",
      characterizationNat: "https://drive.google.com/file/d/1r6kx2XUfk0ljVRVPDgcbgOVdsUzG4Nu6/view?usp=drive_link",
      issuesAndConcern: "https://drive.google.com/file/d/1FwcvdfS1HifYCgPqRva_cOyz8ZHILW3F/view?usp=drive_link",
      catchUpPlan: "https://drive.google.com/file/d/1sEGjUMgkw5XnEUrH7WeEcQOIMvgt7luC/view?usp=drive_link",
    },
  },
  {
    id: 8,
    name: "Malindang Elementary School",
    coords: [8.41514, 123.74497],
    type: "elementary",
    heads: [
      { name: "Irene R. Narit", role: "School Head", image: "images/heads/Irene R. Narit.png" },
    ],
    documents: {
      schoolProfile: "https://drive.google.com/file/d/1Lo5-L9Z78di3zyy8aNG6PlVItftOhI4Y/view?usp=drive_link",
      performanceDashboard: "https://drive.google.com/file/d/1KO7wCZ6Y7LFfCSunAD61JOQG8DBws96C/view?usp=drive_link",
      characterizationEnrollment: "https://drive.google.com/file/d/1s6L7GJYa3sbMghNan9vwac1-QY14xskn/view?usp=drive_link",
      natResult: "https://drive.google.com/file/d/1rYv9huxiuBEPA2FzFeHKbSv0vBc3RaTz/view?usp=drive_link",
      characterizationNat: "https://drive.google.com/file/d/1cEsIeaRNv05POvwvrE2UT0rLOu1R__fC/view?usp=drive_link",
      issuesAndConcern: "https://drive.google.com/file/d/1V1VIPVmgonLIB83oyKBrSrnF76EPg3Bl/view?usp=drive_link",
      catchUpPlan: "https://drive.google.com/file/d/1No3qkDfU1IrezFF8rPAmXm4c4AMKIsQc/view?usp=drive_link",
    },
  },
  {
    id: 9,
    name: "Victor Enerio Memorial Elementary School",
    coords: [8.45386, 123.78488],
    type: "elementary",
    heads: [
      { name: "Glyndel Bless P. Vicente", role: "School Head", image: "images/heads/Glyndel Bless P. Vicente.png" },
    ],
    documents: {
      schoolProfile: "https://drive.google.com/file/d/14ULl8cGk5XO29W3gIQQR1fjg040E-A_d/view?usp=drive_link",
      performanceDashboard: "https://drive.google.com/file/d/1OnntEu3TrklI322x5mF9ATLRWWvolIat/view?usp=drive_link",
      characterizationEnrollment: "https://drive.google.com/file/d/1HBRon_Pp4NxNPBWWmIfXJhyKaHts4i_K/view?usp=drive_link",
      natResult: "https://drive.google.com/file/d/1pQSFQVTWXp5kFnJZlYJW9BwG1UxoF3kU/view?usp=drive_link",
      characterizationNat: "https://drive.google.com/file/d/1Wc_ILSbr1kRQFJqtKs9B0m88CjyNQxq6/view?usp=drive_link",
      issuesAndConcern: "https://drive.google.com/file/d/1cHYPG1lkIeBTLTNPXIt3SHLOCyHnM1cB/view?usp=drive_link",
      catchUpPlan: "https://drive.google.com/file/d/1JgSF_rAUfp5OT2Mx3pu4N1WCFfPAJdmJ/view?usp=drive_link",
    },
  },
];
