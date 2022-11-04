import { MarketPlaceCard } from "./MarketPlaceCard"

import dockerLogo from '~/images/docker.png';
import fingerprintLogo from '~/images/fingerprint.png';
import gitlabLogo from '~/images/gitlab.png';
import metricLogo from '~/images/metric.png';
import parabolicLogo from '~/images/parabolic.png';
import slackLogo from '~/images/slack.png';

export const AllMarketPlaceCards = () => {
  return (
    <div className="grid grid-cols-1 ss:grid-cols-2 md:grid-cols-3 gap-5 md:gap-3">
              <MarketPlaceCard
                itemLink="#"
                itemLogo={dockerLogo}
                itemName="Docker"
                description="With 1Password Business, you can automate many common administrative tasks using the 1Password SCIM bridge."
              />
              <MarketPlaceCard
                itemLink="#"
                itemLogo={gitlabLogo}
                itemName="Gitlab"
                description="Shorten development cycles and innovate faster with reliability through DevOps automation."
              />
              <MarketPlaceCard
                itemLink="#"
                itemLogo={slackLogo}
                itemName="Slack"
                description="Slack is a messaging program designed specifically for the office, but has also been adopted for personal use."
              />
              <MarketPlaceCard
                itemLink="#"
                itemLogo={metricLogo}
                itemName="Metric"
                description="The metric system is a system of measurement that succeeded the decimalised system based on the metre."
              />
              <MarketPlaceCard
                itemLink="#"
                itemLogo={fingerprintLogo}
                itemName="Fingerprint"
                description="A fingerprint is an impression left by the friction ridges of a human finger."
              />
              <MarketPlaceCard
                itemLink="#"
                itemLogo={parabolicLogo}
                itemName="Parabolic"
                description="Parabolic usually refers to something in a shape of a parabola, but may also refer to a parable. Parabolic may refer to: In mathematics:."
              />
            </div>
  )
}
