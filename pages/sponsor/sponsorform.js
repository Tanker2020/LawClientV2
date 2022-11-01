import { useForm } from "@mantine/form";
import { Modal, Button, Group, InputBase,TextInput,Stepper,Tabs,Image,Autocomplete } from '@mantine/core';
import { IconDeviceMobile,IconMail,IconX,IconPhoto,IconMessageCircle,IconSettings,IconKey,IconCheck,IconPigMoney,IconChevronsRight,IconAward,IconAd,IconTrophy } from '@tabler/icons';
import { showNotification,updateNotification} from "@mantine/notifications";
import {useState } from "react";
import InputMask from 'react-input-mask';


/*<Timeline style={{margin: '5%'}} active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<IconGavel size={12} />} title="Competitions">
        <Text color="dimmed" size="sm">Test<Text variant="link" component="span" inherit></Text>Test</Text>
        <Text size="xs" mt={4}>Test</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<IconGitCommit size={12} />} title="test">
        <Text color="dimmed" size="sm">test<Text variant="link" component="span" inherit>test</Text></Text>
        <Text size="xs" mt={4}>test</Text>
      </Timeline.Item>

      <Timeline.Item title="test" bullet={<IconSectionSign size={15} />} lineVariant="dashed">
        <Text color="dimmed" size="sm">test<Text variant="link" component="span" inherit>test</Text></Text>
        <Text size="xs" mt={4}>test</Text>
      </Timeline.Item>

      <Timeline.Item title="test" bullet={<IconMessageDots size={12} />}>
        <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>test</Text> test</Text>
        <Text size="xs" mt={4}>test</Text>
      </Timeline.Item>
    </Timeline>*/

function sponsorform() {

    return (
        <div>
            <div>
                <Image style={{filter: 'brightness(20%)'}} height={150} src="https://images.unsplash.com/photo-1505664063603-28e48ca204eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></Image>
            </div>
            <Tabs color="teal" defaultValue="gallery" style={{textAlign: 'center'}}>
                <Tabs.List grow position="center">
                    <Tabs.Tab value="gallery" icon={<IconPhoto size={14} />}>Gallery</Tabs.Tab>
                    <Tabs.Tab value="Form" icon={<IconMessageCircle size={14} />}>Form</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="gallery" pt="xs">
                    <Model/>
                </Tabs.Panel>

                <Tabs.Panel value="Form" pt="xs">
                    <Form/>
                </Tabs.Panel>
            </Tabs>
        </div>
    )
}

function Form() {
    const [email, setEmail] = useState('');
    const form = useForm({
        validateInputOnChange: [
            'email'
        ],
        initialValues: {
            names: "",
            email: email,
            company: "",
            phone: ""
        },
        validate: {
            email: (value)=>(value.length < 0 ? "This Form is Required": null)
        }
    })
    const data =
      email.trim().length > 0 && !email.includes('@')
        ? ['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${email}@${provider}`)
        : [];


    function Check(){
        showNotification({
            title: 'Loading',
            id: 'notification',
            message: 'Sending Data',
            loading: true,
            color: 'teal',
            icon: <IconCheck size={14} />,
            autoClose: 6000,
        });
        if (email.length>0){
            setTimeout(() => {
                updateNotification({
                    id: 'notification',
                    title: "Thank You",
                    message: "Your Form has been Submitted",
                    color: "teal",
                    icon: <IconCheck size={20} />,
                });
            }, 3000);
        }else{
            updateNotification({
                id: 'notification',
                title: "Error",
                message: "Please Fill the Form",
                color: "red",
                icon: <IconX size={20} />,
            });
        }
    }
  
    return (
    <>
        <form style={{maxWidth: '50%',margin: 'auto'}} onSubmit={form.onSubmit((values)=>console.log(values))}>
            <TextInput styles={{input: {borderRadius: '10px',borderBlockColor: 'purple'}}} label="Name" placeholder="Alex Arma" {...form.getInputProps('names')} />
            <Autocomplete 
                styles={{input: {borderRadius: '10px',borderBlockColor: 'purple'}}}
                withAsterisk
                value={email}
                onChange={setEmail}
                label="Email"
                placeholder="Your Email"
                icon={<IconMail size={20} />}
                data={data}
            />
            <TextInput styles={{input: {borderRadius: '10px',borderBlockColor: 'purple'}}} label="Company" placeholder="Your Company" {...form.getInputProps('company')} />
            <InputBase styles={{input: {borderRadius: '10px',borderBlockColor: 'purple'}}} icon={<IconDeviceMobile/>} label="Phone Number" component={InputMask} mask="+9 (999)-999-9999" placeholder="+1 (213)-123-5678" {...form.getInputProps('phone')}/>
            <Button type="submit" onClick={()=>{Check(),form.setFieldValue('email',email)}} style={{margin: '2%'}} variant="outline" color="violet">
                Submit
            </Button>
        </form>
    </>
    );
  }

function Model(){
    const [opened, setOpened] = useState(false);
    const [active, setActive] = useState(0);

    return(
        <>
        <Modal
                centered
                size={"70%"}
                opened={opened}
                onClose={() => setOpened(false)}
                title="Dear Sponsors!"
                overlayBlur={5}
                transition="slide-down"
                transitionDuration={500}
                timingFunction="ease"
            >
                <p>As we begin to work on establishing our club, we recognize the several expenses that accompany running it such as the fees required to enter in National Mock Trial competitions, obtain access to high-quality research and material, and conduct other student-led activities aimed to enrich members’s knowledge about law. Because we are primarily relying on fundraising and sponsorships to fund these endeavors, we would be immensely grateful for any contributions that you are willing to make. In return, our club guarantees to promote our sponsors throughout the club and to a wider community at every given opportunity by displaying their logos on our website, social media accounts, and competition attire. This Law club strives to foster an environment that prioritizes the values of equity, integrity, and pride, and we believe you can help us achieve this vision through donations and sponsorships. Thank you in advance for your support and generosity.</p>
                <h1 style={{textAlign: 'center'}}>Path to our Success</h1> 
                <Stepper active={active} onStepClick={setActive} breakpoint="sm">
                    <Stepper.Step icon={<IconPigMoney/>} completedIcon={<IconChevronsRight/>} label="First step" description="Sponsor Us">
                        Step 1 content: Fil out our form
                    </Stepper.Step>
                    <Stepper.Step icon={<IconAd/>} completedIcon={<IconChevronsRight/>} label="Second step" description="Talk about representation">
                        Step 2 content: T-Shirts/Logos and more
                    </Stepper.Step>
                    <Stepper.Step icon={<IconAward/>} completedIcon={<IconChevronsRight/>} label="Third step" description="Competition Time">
                        Step 3 content: We repsresent you at the competition
                    </Stepper.Step>
                    <Stepper.Step icon={<IconTrophy/>} completedIcon={<IconChevronsRight/>} label="Final step" description="Absolute success">
                        Step 4 content: See the final product
                    </Stepper.Step>
                </Stepper>
            </Modal>
            <Group position="center" style={{margin:'2%'}}>
                <Button onClick={() => setOpened(true)}>Why Sponsor Us?</Button>
            </Group>
        </>
    )
}

export default sponsorform