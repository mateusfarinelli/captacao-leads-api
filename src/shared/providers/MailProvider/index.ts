import { container } from "tsyringe";

import { MailProviderInterface } from "./MailProviderInterface";
import { MailProvider } from "./implementations/MailProvider";

const mailProvider = {
  mailProvider: container.resolve(MailProvider),
};

container.registerInstance<MailProviderInterface>(
  "MailProvider",
  mailProvider["mailProvider"]
);