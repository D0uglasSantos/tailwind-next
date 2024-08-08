import {
  Control,
  FileList,
  ImagePreview,
  Root,
  Trigger,
} from "./components/Form/FileInput";
import {
  InputControl,
  InputPrefix,
  InputRoot,
} from "./components/Sidebar/input";
import SettingTabs from "./components/SettingsTabs";
import Select from "./components/Form/Select";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import SelectItem from "./components/Form/Select/SelectItem";
import TextArea from "./components/Form/Select/TextArea";
import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>
      <SettingTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between pb-5 border-b border-zinc-200 dark:border-zinc-700 gap-4 lg:flex-row lg:items-center">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex flex-col w-full gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className="flex flex-col lg:grid gap-6 lg:grid-cols-2">
              <InputRoot>
                <InputControl defaultValue="Douglas" />
              </InputRoot>

              <div className="flex flex-col gap-3 lg-block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                >
                  Name
                </label>
                <InputRoot>
                  <InputControl id="lastName" defaultValue="Santos" />
                </InputRoot>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email addres
            </label>
            <InputRoot>
              <InputPrefix>
                <Mail className="h-5w-5 text-zinc-500" />
              </InputPrefix>
              <InputControl
                id="email"
                type="email"
                defaultValue="douglasas410@gmail.com"
              />
            </InputRoot>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="text-sm font-normal text-zinc-500 block mt-0.5 ">
                This will be displayed on your profile
              </span>
            </label>
            <Root className="flex flex-col lg:flex-row lg:items-start gap-5">
              <ImagePreview />
              <Trigger />
              <Control />
            </Root>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Role
            </label>
            <InputRoot>
              <InputControl id="role" type="text" defaultValue="CTO" />
            </InputRoot>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United State" />
            </Select>
            <div></div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
            <div></div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Bio
              <span className="text-sm font-normal text-zinc-500 block mt-0.5 ">
                Write a shrot introduction.
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col lg:grid gap-3 lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    defaultChecked
                    value="normal"
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>
              <TextArea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>
          </div>
          <div className="flex flex-col lg:grid lg:grid-cols-form gap-3 pt-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span className="text-sm font-normal text-zinc-500 block mt-0.5 ">
                Share a few snippets of your works.
              </span>
            </label>
            <Root>
              <Trigger />
              <FileList />
              <Control multiple />
            </Root>
          </div>
          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings" variant="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
