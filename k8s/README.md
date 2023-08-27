# Pull Image Private Registry

[Link](https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/)

## Login Gitlab Docker Registry based on existing credentials

```bash
kubectl create secret generic regcred \
    --from-file=.dockerconfigjson=<path/to/.docker/config.json> \
    --type=kubernetes.io/dockerconfigjson
```

## Create a Secret by providing credentials on the command line

```bash
kubectl create secret docker-registry regcred --docker-server=<your-registry-server> --docker-username=<your-name> --docker-password=<your-pword> --docker-email=<your-email>
```

## Inspecting the Secret regcred

```bash
kubectl get secret regcred --output=yaml
```
