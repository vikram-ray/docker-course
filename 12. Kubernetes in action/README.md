- Kubectl - It a kubernetes controller that we install in our local machine to control kubernetes in local and cloud
- minikube - It is a local kubernetes

- Kubernetes works with objects (Pods, Deployments, Services, Volumes, etc)

- Objects can be created in 2 ways - imperatively(running each command 1 by 1) or Declaratevely(resource def file)
- The smallest UNIT kubernetes interact is POD
- A pod can hold 1 or more containers. These containers can communicates with `localhost` also.
- We can also create pod but be let Kubernetes control pods (manage deployments/ Controller)
- Objects
    - Deployments Object -  responsible for deploying app
    - Service Object - Expose ports to external world/internal pods. use `--type=LoadBalancer` to 
    - 
    - 
- If server crashes, pod retarts the container. You can view restart count of pods with `kubectl get pods`
- We can scale replicas in advance as per our active users.
- commnds
    - `minikube dashboard ` - to view minikube dashboard
    - `kubectl get deployments` `kubectl get pods`
    - # some of the Imperative commands below:- 
    - `kubectl create deployment first-app --image=vikramray2011/kub1` - to create a pod based on dockerhub image 
    - `kubectl expose deployment first-app --type=LoadBalancer --port=8080` - expose a deployment via service
    - `kubectl scale deployment/first-app --replicas=3` - scale up a deplyment to 3 relicas, loadbalancer will select the pods randomly.
    - `kubectl scale deployment/first-app --replicas=1` - to scale to 1
    - `kubectl set image deployment/first-app kub1=vikramray2011/kub1:0.1` - to update/rollout deployment with new image
    - `kubectl rollout status deployment/first-app` - to view the updated rollout status
    - `kubectl rollout undo deployments/first-app` - to undo the latest rolled image
    - `kubectl rollout history deployment/first-app` - to view the rollout for an deployment
    - `kubectl rollout undo deployments/first-app --to-revision=1` - view revision and go to that point
    - # Declarative
    - `kubectl apply -f=deployment.yaml` - to apply/replicate the file conf in connected cluster
    - `kubectl delete -f=deployment.yaml -f=service.yaml` - to delete deployment and service
    - `kubectl apply -f=deployment.yaml -f=service.yaml` - to apply deployment and service
## create first k8s
1. create a deployment file with `deployment.yaml` and `kubectl apply -f deployment.yaml` 
2. create a service file with `service.yaml` and `kubectl apply -f service.yaml` 
3. since we are using minikube, and local env we dont have loadbalancer IP, so ` minikube service backend ` will expose the service to a port so that we can access it

- we can also have multiple resource in 1 file with `---` as differentiator between them
- `selector` - its an important feature that allow to connect different resources
- `selector` have 2 common ways to select resources - matchLabel and matchExpression
- We can also add labels in metadata of services and deployment
- `kubectl delete deployment,service -l group=qa` - then we can delete deployment and service with the labels
- `livenessProbe` - we defind this so that k8s will check healthy status of the container
- `imagePullPolicy` (Always,etc)- we can pull based on the condition

## Notes:
 - On worker node, kubelet manage pod and container
 - 
