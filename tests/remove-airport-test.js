import { Selector } from "testcafe";
import { MetarPage } from "./metar-page";

fixture("Remove airport")
  .page("http://localhost:3001");

test("Clicking remove button should remove METAR card from list", async t => {
  const page = new MetarPage();

  await t.typeText(page.airportInput, "efhk")
    .pressKey("enter")
    .typeText(page.airportInput, "eftu")
    .pressKey("enter");

  const efhkMetarCard = page.metarList.airportCardByCode("efhk");
  await t
    .click(efhkMetarCard.removeButton)
    .expect(page.metarList.count()).eql(1)
    .expect(efhkMetarCard.container.exists).notOk;
});