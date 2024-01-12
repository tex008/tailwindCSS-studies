import * as FileInput from '@/components/Form/FileInput'
import FormSelect from '@/components/Form/Select'
import * as Input from '@/components/Form/input'

import FormLabel from '@/components/Form/Label'
import SelectItem from '@/components/Form/Select/select-item'
import FormTextArea from '@/components/Form/TextArea'
import { Button } from '@/components/button'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import SettingsTabs from '../components/Form/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className=" text-3xl  font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200  pb-5 lg:flex-row lg:items-center dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Perosnal Info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <FormLabel htmlFor="firstName" title="Name" />
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Vinicius" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <FormLabel
                  htmlFor="lastName"
                  title="Last name"
                  className="lg:sr-only"
                />
                <Input.Root>
                  <Input.Control defaultValue="Teixeira" />
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <FormLabel htmlFor="email" title="Email address" />
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="vinicius.teixeira.f@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <FormLabel htmlFor="photo" title="Your photo">
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </FormLabel>
            <div>
              <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <FormLabel htmlFor="role" title="Role" />
            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <FormLabel htmlFor="country" title="Country" />

            <FormSelect placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </FormSelect>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <FormLabel htmlFor="coutimezonentry" title="Timezone" />

            <FormSelect placeholder="Select a timezone...">
              <SelectItem value="brt" text="Brasilia Time (BRT) (UTC-03:00)" />
              <SelectItem
                value="pst"
                text="Pacific Standard Time (PST) (UTC-08:00)"
              />
            </FormSelect>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <FormLabel htmlFor="bio" title="Bio">
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </FormLabel>

            <div className="space-y-3">
              <div className=" flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <FormSelect defaultValue="normal" placeholder="">
                  <SelectItem value="normal" text="Normal Text" />
                  <SelectItem value="md" text="Markdown" />
                </FormSelect>

                <div className="flex items-center gap-1 ">
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

              <FormTextArea
                id="bio"
                defaultValue="I'm a FullStack Web Developer based in São Paulo, Brazil. I specialise in building innovative, scalable and performatic applications."
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <FormLabel htmlFor="projects" title="Portfolio projetcs">
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </FormLabel>

            <FileInput.Root>
              <FileInput.Trigger />
              <FileInput.FileList />
              <FileInput.Control multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
