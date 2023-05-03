import { defaultLocale } from "@starknet-io/cms-data/src/i18n/config";
import { getMessages } from "@starknet-io/cms-data/src/i18n/intl";
import { getAlerts } from "@starknet-io/cms-data/src/settings/alert";
import { getMainMenu } from "@starknet-io/cms-data/src/settings/main-menu";
import { PageContextServer } from "src/renderer/types";

export async function onBeforeRender(pageContext: PageContextServer) {
  const locale = pageContext.locale ?? defaultLocale;
  const mainMenu = await getMainMenu(locale, pageContext.event);
  const messages = await getMessages(locale);
  const alerts = await getAlerts(locale, pageContext.event);

  return {
    pageContext: {
      alerts,
      messages,
      mainMenu,
    },
  };
}
