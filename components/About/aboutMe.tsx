import {
  createStyles,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from '@mantine/core';

import Image from 'next/image';

import { IconBat, IconBrandLinkedin, IconMail, IconPepper } from '@tabler/icons';

import Pinhead from '../../public/pinhead.gif';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

export default function Pat() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>Pat</Title>
            <Text color="dimmed" mt="md">
              I am a buffoon masquerading as a functional adult; and I like to think I do a pretty
              good impression. In addition to that, my skills include:
            </Text>

            {/* 1st List; separate to have different icons */}
            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  {/* NOTE: ALTER HERE FOR THE ICON/BULLETS */}
                  <IconBat size={17} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Modeling</b> ??? I've worked with a few different molecular vizulation or
                simulation tools, e.g. Chimera, RDKit, Rosetta and AutoDock Vina
              </List.Item>
              <List.Item>
                <b>Machine Learning</b> ??? I've had, or created the opportunity to work on several
                projects building machine learning models for different applications.
              </List.Item>
              <List.Item>
                <b>Wet-lab</b> ??? Before my Master's, I worked for 2 years in antibody formulation
                development
              </List.Item>
              <List.Item>
                <b>Bringing it all together</b> ??? I've enjoyed having several projects where one had
                to consider and integrate the science, the coding/modeling, and the significance,
                the translation of the results to real-world applications.
              </List.Item>
            </List>

            {/* 2nd LIST */}
            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  {/* NOTE: ALTER HERE FOR THE ICON/BULLETS */}
                  <IconPepper size={17} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                I too enjoy spicy food. It's like a delicious, purifying sauna: all the sweat and
                tears leaving my body as I nourish it.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                component="a"
                href="https://www.linkedin.com/in/patrick-finnerty"
                size="xl"
                radius="xl"
                variant="gradient"
                className={classes.control}
                leftIcon={<IconBrandLinkedin size={20} />}
              >
                LinkedIn
              </Button>
              <Button
                compact={false} //GOOD
                component="a"
                size="xl"
                radius="xl"
                variant="gradient"
                gradient={{ from: 'red', to: 'gray', deg: 45 }}
                color="gray"
                leftIcon={<IconMail size={22} stroke={1.5} />}
                onClick={() => (window.location.href = 'mailto:patrick.finnerty42@gmail.com')}
              >
                Email me
              </Button>
            </Group>
          </div>

          <Image src={Pinhead} />
        </div>
      </Container>
    </div>
  );
}
