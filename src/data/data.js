// 1

import naveed from "../assets/images/persons/naveed.jpg"; // 1
import sajad from "../assets/images/persons/sajad.jpg"; // 1
import sina from "../assets/images/persons/sina.jpg"; // 1
import amir2 from "../assets/images/persons/amir2.jpg"; // 1
import hediye from "../assets/images/persons/hediye.jpg"; // 1
import elham from "../assets/images/persons/elham.jpg"; // 1

// 2

import ghadirzadeImage from "../assets/images/persons/ghadirzade.jpg"; // 2
import sadighi from "../assets/images/persons/Mr.sadighi.jpg"; // 2
import parsaMahani from "../assets/images/persons/parsa_mahani.jpg"; // 2
import mehregan from "../assets/images/persons/mehravar.jpg"; // 2

// 3

import unknown1 from "../assets/images/persons/unknown1.jpg"; // 3
import unknown3 from "../assets/images/persons/unknow3.jpg"; // 3
import mamal from "../assets/images/persons/mamali.jpg"; // 3

// 4

import asghariImage from "../assets/images/persons/asghari.jpg"; // 4
import nima from "../assets/images/persons/nima.jpg"; // 4
import ahmadpoor from "../assets/images/persons/i_ahmadpoor.jpg"; // 4
import pooooya from "../assets/images/persons/pooooya.jpg"; // 4

// 5

import asnavandi from "../assets/images/persons/asnavandi.jpg"; // 5
import unknown2 from "../assets/images/persons/unknow2.jpg"; // 5

// 6
import arash from "../assets/images/persons/arash.jpg"; // 6
import safakish from "../assets/images/persons/m_safakish.jpg"; // 6
import pariya from "../assets/images/persons/pariya.jpg"; // 6
import hamed from "../assets/images/persons/hamed.jpg"; // 6
import amirreza from "../assets/images/persons/amirreza.jpg"; // 6
import hosein from "../assets/images/persons/hosein.jpg"; // 6
import shahmoradiImage from "../assets/images/persons/a_shahmoradi.jpg"; // 6

// 7
import amir from "../assets/images/persons/amir.jpg"; // 7
import sepehr from "../assets/images/persons/sepehr.jpg"; // 7
import nightysix from "../assets/images/persons/96E.jpg"; // 7

// 8

import ahmadzade from "../assets/images/persons/h_ahmadzade.jpg"; // 8
import unknown4 from "../assets/images/persons/unknown4.jpg"; // 8
import mohadese from "../assets/images/persons/mohadese.jpg"; // 8

// 9

import saghirichi from "../assets/images/persons/h_sagharichi.jpg"; // 9
import me from "../assets/images/persons/khodam.jpg"; // 9
import unknown5 from "../assets/images/persons/unkown5.jpg"; // 9

// 10

import bardia from "../assets/images/persons/bardia.jpg"; // 10

// 11

import reghabi from "../assets/images/persons/reghabi.jpg"; // 11
import ali from "../assets/images/persons/ali.jpg"; // 11

// 12

import danayi from "../assets/images/persons/m_danayi.jpg"; // 12

const emptyYear = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12].map((_) => [{}]);

const farvardin = [
  { name: "سجاد دودابی", image: sajad, date: new Date(2001, 2, 25) },
  { name: "نوید صادقی", image: naveed, date: new Date(2001, 2, 28) },
  { name: "امیرحسین موئیدی", image: amir2, date: new Date(2001, 3, 9) },
  { name: "سینا امیدوار", image: sina, date: new Date(2001, 3, 10) },
  { name: "الهام ظهیر", image: elham, date: new Date(2001, 3, 15) },
  { name: "هدیه افضل زاده", image: hediye, date: new Date(2001, 3, 18) },
];

const ordibehesht = [
  {
    name: "پارسا و ماهان",
    image: parsaMahani,
    date: new Date(2001, 3, 23),
  },
  { name: "مهرگان شکوهی", image: mehregan, date: new Date(2001, 4, 4) },
  { name: "سعدالدین صدیق", image: sadighi, date: new Date(2001, 4, 15) },
  {
    name: "حسین قدیرزاده",
    image: ghadirzadeImage,
    date: new Date(2001, 4, 21),
  },
];

const khordad = [
  {
    name: "محمدعلی مجهتد سلیمانی",
    image: mamal,
    date: new Date(2001, 4, 26),
  },
  { name: "عرفان رضایی", image: unknown1, date: new Date(2001, 5, 6) },
  { name: "امیرسالار صادقی", image: unknown3, date: new Date(2001, 5, 21) },
]; // khordad;

const tir = [
  { name: "نیما نیلچیان", image: nima, date: new Date(2001, 5, 25) },
  { date: new Date(1994, 5, 26), image: asghariImage, name: "سید امیر اصغری" },
  { name: "پویا علوی", image: pooooya, date: new Date(2001, 6, 16) },
  { name: "ایمان احمدپور", image: ahmadpoor, date: new Date(2001, 6, 18) },
]; // tir

const mordad = [
  { name: "ملیکا ملکی", image: unknown2, date: new Date(2001, 6, 30) },
  {
    name: "محمدحسین اسناوندی",
    image: asnavandi,
    date: new Date(2001, 7, 13),
  },
]; // mordad;

const shahrivar = [
  { name: "آرش مرادی", image: arash, date: new Date(2001, 8, 11) },
  { name: "معصومه صفاکیش", image: safakish, date: new Date(2001, 7, 30) },
  { name: "پریا جوکار", image: pariya, date: new Date(2001, 8, 21) },
  { name: "حامد خسروی", image: hamed, date: new Date(2001, 8, 8) },
  { name: "امیررضا زارع", image: amirreza, date: new Date() },
  { name: "حسین برقعی", image: hosein, date: new Date() },
  { name: "علیرضا شاهمرادی", image: shahmoradiImage, date: new Date() },
];

const mehr = [
  { name: "امیرعباس زنده روح", image: nightysix, date: new Date(1997, 8, 28) },
  { name: "سپهر نوروزی", image: sepehr, date: new Date(2001, 8, 29) },
  { name: "امیررضا رضایی", image: amir, date: new Date(2001, 9, 19) },
];

const aban = [
  { name: "حسین احمدزاده", image: ahmadzade, date: new Date(2000, 9, 23) },
  { name: "محدثه محمدزاده", image: mohadese, date: new Date(2001, 10, 14) },
  { name: "احسان", image: unknown4, date: new Date(2001, 10, 15) },
];

const azar = [
  { name: "علی خاوری", image: unknown5, date: new Date(2001, 11, 6) },
  { name: "محمد خداقلی", image: me, date: new Date(2001, 11, 9) },
  { name: "هلیا ساغریچی", image: saghirichi, date: new Date(2001, 11, 13) },
];

const dey = [
  { name: "بردیا فاردار", image: bardia, date: new Date(2001, 12, 3) },
];

const bahman = [
  { name: "رقابی", image: reghabi, date: new Date(2002, 1, 2) },
  { name: "علی مفیدیان", image: ali, date: new Date(2002, 1, 7) },
];

const esfand = [
  { name: "محمد دانایی", image: danayi, date: new Date(2002, 2, 12) },
];

const birthdayData = [
  [
    farvardin,
    ordibehesht,
    khordad,
    tir,
    mordad,
    shahrivar,
    mehr,
    aban,
    azar,
    dey,
    bahman,
    esfand,
  ],
];

export { birthdayData };

// const birthdayData = [
//   [
//     ...[1, 2, 3].map((_, index) => []),
//     [],
//     ...[5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => []),
//   ], // 1363 == 0
//   emptyYear, // 1364
//   emptyYear, // 1365
//   emptyYear, // 1366
//   emptyYear, // 1367
//   emptyYear, // 1368
//   emptyYear, // 1369
//   emptyYear, // 1370
//   emptyYear, // 1371
//   emptyYear, // 1372
//   emptyYear, // 1373
//   emptyYear, // 1374
//   emptyYear, // 1375
//   emptyYear, // 1376
//   [], // 1377
//   [], // 1378
//   [], // 1379
//   [farvardin, ordibehesht, khordad, tir, mordad, shahrivar], // 1380
//   [], // 1381
//   // total year == 19
// ];
