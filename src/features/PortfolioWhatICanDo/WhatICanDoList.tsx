import AllInclusiveIcon from "@mui/icons-material/AllInclusiveRounded";
import CodeIcon from "@mui/icons-material/CodeRounded";
import DevicesIcon from "@mui/icons-material/DevicesRounded";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphoneRounded";
import SecurityIcon from "@mui/icons-material/SecurityRounded";
import WidgetsIcon from "@mui/icons-material/WidgetsRounded";
import Box from "@mui/material/Box";

import { WhatICanDoCard } from "./WhatICanDoCard";

export const WhatICanDoList = (): JSX.Element => {
  return (
    <Box
      sx={(theme) => ({
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: theme.spacing(2),
        [theme.breakpoints.only("xs")]: {
          gridTemplateColumns: "repeat(1, 1fr)",
        },
        [theme.breakpoints.only("sm")]: {
          gridTemplateColumns: "repeat(2, 1fr)",
        },
      })}
    >
      <WhatICanDoCard
        name="Web Frontend"
        subName="高速でパフォーマンスや保守性の高いWebサイトを構築できます。開発体験を意識したプロジェクトの立ち上げを行うことができます。"
        avatar={<DevicesIcon />}
      />
      <WhatICanDoCard
        name="Web Backend"
        subName="セキュリティやパフォーマンスを意識したWebサイトを構築できます。WebサイトのDBパフォーマンスの改善を行うことができます。"
        avatar={<CodeIcon />}
      />
      <WhatICanDoCard
        name="Native App"
        subName="iOSとAndroidのネイティブアプリを構築できます。Webの知見を活かし、Webアプリとユーザー体験の一貫性を持たせることができます。"
        avatar={<PhoneIphoneIcon />}
      />
      <WhatICanDoCard
        name="Security"
        subName="国家資格の情報処理安全確保支援士です。(第017758号)エンジニアの視点から、経営とITが一体となったセキュリティ対策を推進できます。"
        avatar={<SecurityIcon />}
      />
      <WhatICanDoCard
        name="Scrum"
        subName="Certified ScrumMaster®です。スクラムマスターとして、機敏性をもって価値あるプロダクト開発ができる組織を作り上げることができます。"
        avatar={<AllInclusiveIcon />}
      />
      <WhatICanDoCard
        name="Mechanical Design"
        subName="3D CAD, 2D CADなどを用いた機械設計や強度計算ができます。3Dプリンター、NC工作機械、旋盤など各種工作機械を使用することもできます。"
        avatar={<WidgetsIcon />}
      />
    </Box>
  );
};
